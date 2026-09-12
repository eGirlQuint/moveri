export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export class ContactFormError extends Error {
  rateLimited: boolean

  constructor(message: string, rateLimited = false) {
    super(message)
    this.rateLimited = rateLimited
  }
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const res = await fetch("/api/contact/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

  if (res.status === 429) {
    throw new ContactFormError("rate_limited", true)
  }
  if (!res.ok) {
    throw new ContactFormError("delivery_failed")
  }
}
