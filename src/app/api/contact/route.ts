import { NextRequest, NextResponse } from "next/server"
import { checkRateLimit } from "@/lib/rate-limit"
import { sendContactEmail } from "@/lib/mailer"

function getClientIp(req: NextRequest): string {
  const realIp = req.headers.get("x-real-ip")
  if (realIp) return realIp
  const forwardedFor = req.headers.get("x-forwarded-for")
  if (forwardedFor) return forwardedFor.split(",")[0].trim()
  return "unknown"
}

function isNonEmptyString(value: unknown, maxLength: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  const ip = getClientIp(req)
  const { allowed, retryAfterSeconds } = checkRateLimit(ip)
  if (!allowed) {
    return NextResponse.json(
      { error: "rate_limited", message: "Too many messages. Please try again in a minute." },
      { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } },
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 })
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 })
  }

  const { name, email, phone, message } = body as Record<string, unknown>

  if (!isNonEmptyString(name, 200) || !isNonEmptyString(email, 320) || !isNonEmptyString(message, 5000)) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 })
  }
  if (phone !== undefined && phone !== "" && !isNonEmptyString(phone, 50)) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 })
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  if (!webhookUrl) {
    console.error("DISCORD_WEBHOOK_URL is not set — contact form cannot deliver messages.")
    return NextResponse.json({ error: "not_configured" }, { status: 500 })
  }

  const discordPayload = {
    embeds: [
      {
        title: "Nieuw bericht via moveri.eu",
        color: 0xcc55c8,
        fields: [
          { name: "Naam", value: String(name).slice(0, 1024), inline: true },
          { name: "E-mail", value: String(email).slice(0, 1024), inline: true },
          ...(phone ? [{ name: "Telefoon", value: String(phone).slice(0, 1024), inline: true }] : []),
          { name: "Bericht", value: String(message).slice(0, 1024) },
        ],
        timestamp: new Date().toISOString(),
      },
    ],
  }

  let discordRes: Response
  try {
    discordRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload),
    })
  } catch (err) {
    console.error("Failed to reach Discord webhook:", err)
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 })
  }

  if (!discordRes.ok) {
    console.error("Discord webhook rejected the message:", discordRes.status, await discordRes.text().catch(() => ""))
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 })
  }

  // Also mirror the message to the Zoho inbox, with Reply-To set to the
  // visitor so it can be answered directly from the inbox. Best-effort: the
  // Discord webhook above is the required delivery channel, so a transient
  // SMTP problem shouldn't turn into a failed submission for the visitor.
  if (process.env.ZOHO_SMTP_USER && process.env.ZOHO_SMTP_PASS) {
    try {
      await sendContactEmail({ name, email, phone: typeof phone === "string" ? phone : undefined, message })
    } catch (err) {
      console.error("Failed to send contact email via Zoho SMTP:", err)
    }
  }

  return NextResponse.json({ ok: true })
}
