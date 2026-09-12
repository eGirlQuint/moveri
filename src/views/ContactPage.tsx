"use client"

import { useState } from "react"
import { ArrowRight, Mail, Phone, MapPin, CheckCircle, Quote, AlertCircle } from "lucide-react"
import { translations } from "@/i18n/translations"
import { useLang } from "@/i18n/LangProvider"
import { DF } from "@/lib/style"
import { Blob } from "@/components/Blob"
import { PrimaryBtn } from "@/components/buttons"
import { submitContactForm, ContactFormError } from "@/lib/contactForm"

const WHATSAPP_NUMBER = "31620030686" // +31 6 200 30 686
const MAP_ADDRESS = "Veilingstraat 30, 7391 GM Twello, Netherlands"

function WhatsAppIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 448 512" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  )
}

export function ContactPage() {
  const { lang } = useLang()
  const t = translations[lang]
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitError, setSubmitError] = useState<string | null>(null)

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = lang === "nl" ? "Naam is verplicht" : "Name is required"
    if (!form.email.trim() || !form.email.includes("@")) e.email = lang === "nl" ? "Geldig e-mailadres vereist" : "Valid email required"
    if (!form.message.trim()) e.message = lang === "nl" ? "Bericht is verplicht" : "Message is required"
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitError(null)
    setSubmitting(true)
    try {
      await submitContactForm(form)
      setSent(true)
    } catch (err) {
      if (err instanceof ContactFormError && err.rateLimited) {
        setSubmitError(lang === "nl" ? "Je verstuurt te veel berichten. Probeer het over een minuut opnieuw." : "You're sending too many messages. Please try again in a minute.")
      } else {
        setSubmitError(lang === "nl" ? "Er ging iets mis bij het versturen. Probeer het later opnieuw of mail ons direct." : "Something went wrong sending your message. Please try again later or email us directly.")
      }
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary bg-input-background ${
      errors[field] ? "border-destructive" : "border-border"
    }`

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-14 pb-16 lg:pt-20 lg:pb-24 px-6">
        <Blob className="w-64 h-64 -top-20 -right-16 opacity-40" style={{ background: "var(--accent)", borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%" }} />
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl text-foreground mb-4" style={DF}>{t.cHero}</h1>
          <p className="text-foreground/65 leading-relaxed">{t.cSub}</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {sent ? (
              <div className="bg-accent rounded-3xl p-12 text-center">
                <CheckCircle size={40} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2" style={DF}>{t.cFormSuccess}</h3>
                <button onClick={() => setSent(false)} className="mt-4 text-primary text-sm underline">
                  {lang === "nl" ? "Nieuw bericht sturen" : "Send another message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 lg:p-10 shadow-sm border border-border flex flex-col gap-5" noValidate>
                {submitError && (
                  <div className="flex items-start gap-3 rounded-xl p-4 text-sm" style={{ backgroundColor: "rgba(212,24,61,0.08)", color: "var(--destructive)" }}>
                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <p>{submitError}</p>
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="name">{t.cFormName}</label>
                    <input id="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass("name")} autoComplete="name" />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="email">{t.cFormEmail}</label>
                    <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass("email")} autoComplete="email" />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="phone">{t.cFormPhone}</label>
                  <input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass("phone")} autoComplete="tel" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="message">{t.cFormMessage}</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <PrimaryBtn type="submit" className="self-start">
                  {submitting ? (lang === "nl" ? "Versturen…" : "Sending…") : t.cFormSend} <ArrowRight size={16} />
                </PrimaryBtn>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-muted rounded-3xl p-8 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <h3 className="text-lg font-semibold text-foreground" style={DF}>{t.cInfoTitle}</h3>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 rounded-full font-medium text-sm text-white hover:opacity-90 transition-opacity flex-shrink-0"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <WhatsAppIcon size={15} />
                  WhatsApp
                </a>
              </div>
              <div className="flex flex-col gap-5">
                <a href={`mailto:${t.cEmail}`} className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{lang === "nl" ? "E-mail" : "Email"}</p>
                    <span className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">{t.cEmail}</span>
                  </div>
                </a>
                <a href={`tel:${t.cPhone}`} className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{lang === "nl" ? "Telefoon" : "Phone"}</p>
                    <span className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">{t.cPhone}</span>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{lang === "nl" ? "Locatie" : "Location"}</p>
                    <span className="text-foreground text-sm font-medium">{t.cLocation}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent rounded-3xl p-8 relative overflow-hidden flex-1">
              <Blob className="w-32 h-32 -bottom-8 -right-8 opacity-30" style={{ background: "var(--primary)", borderRadius: "50% 50% 40% 60% / 60% 40% 60% 40%" }} />
              <Quote size={24} className="text-primary/40 mb-4" />
              <p className="text-foreground/80 italic text-sm leading-relaxed" style={DF}>
                {t.ireneQuote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl lg:text-3xl text-foreground mb-6 text-center" style={DF}>
            {lang === "nl" ? "Waar je ons vindt" : "Where to find us"}
          </h2>
          <div className="rounded-3xl overflow-hidden border border-border shadow-sm">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_ADDRESS)}&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Moveri location on Google Maps"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl lg:text-3xl text-foreground mb-10 text-center" style={DF}>
            {t.cTestimonialsTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.cTestimonials.map((quote, i) => (
              <div key={i} className="bg-muted rounded-3xl p-8 flex flex-col">
                <Quote size={22} className="text-primary/40 mb-4" />
                <p className="text-foreground/80 italic text-sm leading-relaxed flex-1" style={DF}>
                  {quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
