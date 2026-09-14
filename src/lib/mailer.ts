import nodemailer from "nodemailer"
import type { Transporter } from "nodemailer"

export interface ContactEmailInput {
  name: string
  email: string
  phone?: string
  message: string
}

let cachedTransporter: Transporter | null = null

// Lazily builds (and caches) the Zoho SMTP transporter. Returns null when the
// required credentials aren't configured, so callers can treat email as an
// optional delivery channel alongside the Discord webhook.
function getTransporter(): Transporter | null {
  const user = process.env.ZOHO_SMTP_USER
  const pass = process.env.ZOHO_SMTP_PASS
  if (!user || !pass) return null

  if (!cachedTransporter) {
    const host = process.env.ZOHO_SMTP_HOST || "smtp.zoho.eu"
    const port = Number(process.env.ZOHO_SMTP_PORT) || 465
    cachedTransporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465 = implicit TLS, 587 = STARTTLS
      auth: { user, pass },
    })
  }
  return cachedTransporter
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

// Sends the contact form submission to the configured Zoho inbox. The
// Reply-To header is set to the visitor's own name + address, so replying
// from the inbox goes straight back to them instead of to the Zoho account.
export async function sendContactEmail({ name, email, phone, message }: ContactEmailInput): Promise<void> {
  const transporter = getTransporter()
  if (!transporter) {
    throw new Error("Zoho SMTP is not configured (missing ZOHO_SMTP_USER / ZOHO_SMTP_PASS).")
  }

  const from = process.env.ZOHO_SMTP_USER!
  const to = process.env.CONTACT_EMAIL_TO || from

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safePhone = phone ? escapeHtml(phone) : null
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>")

  const html = `
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
    <div style="background: linear-gradient(135deg, #CC55C8, #a83fa5); border-radius: 16px 16px 0 0; padding: 24px 28px;">
      <p style="margin: 0; color: #ffffff; font-size: 13px; letter-spacing: 0.04em; text-transform: uppercase; opacity: 0.85;">moveri.eu</p>
      <h1 style="margin: 4px 0 0; color: #ffffff; font-size: 20px;">Nieuw contactformulier bericht</h1>
    </div>
    <div style="border: 1px solid #eee; border-top: none; border-radius: 0 0 16px 16px; padding: 24px 28px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 6px 0; color: #888; font-size: 13px; width: 90px; vertical-align: top;">Naam</td>
          <td style="padding: 6px 0; font-size: 14px;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #888; font-size: 13px; vertical-align: top;">E-mail</td>
          <td style="padding: 6px 0; font-size: 14px;"><a href="mailto:${safeEmail}" style="color: #CC55C8; text-decoration: none;">${safeEmail}</a></td>
        </tr>
        ${
          safePhone
            ? `<tr>
          <td style="padding: 6px 0; color: #888; font-size: 13px; vertical-align: top;">Telefoon</td>
          <td style="padding: 6px 0; font-size: 14px;">${safePhone}</td>
        </tr>`
            : ""
        }
      </table>
      <div style="background: #faf7fa; border-radius: 12px; padding: 16px 18px; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</div>
      <p style="margin: 20px 0 0; font-size: 12px; color: #999;">Beantwoord deze e-mail om direct terug te sturen naar ${safeName}.</p>
    </div>
  </div>`.trim()

  const text = [
    "Nieuw bericht via moveri.eu",
    "",
    `Naam: ${name}`,
    `E-mail: ${email}`,
    ...(phone ? [`Telefoon: ${phone}`] : []),
    "",
    message,
  ].join("\n")

  await transporter.sendMail({
    from: { name: "Moveri Website", address: from },
    to,
    replyTo: { name, address: email },
    subject: `Nieuw bericht via moveri.eu — ${name}`,
    text,
    html,
  })
}
