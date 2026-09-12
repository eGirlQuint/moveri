"use client"

import { Instagram, Linkedin } from "lucide-react"
import { useLang } from "@/i18n/LangProvider"
import { routes, privacyRoute, termsRoute } from "@/lib/routes"

const logoMoveri = "/images/logo-moveri.webp"

export function Footer() {
  const { lang } = useLang()
  const isNL = lang === "nl"

  const navLinks: Array<{ label: string; href: string }> = [
    { label: "Home", href: routes.home },
    { label: isNL ? "Diensten" : "Services", href: routes.diensten },
    { label: isNL ? "Actueel" : "News", href: routes.actueel },
    { label: isNL ? "Over Moveri" : "About Moveri", href: routes.over },
    { label: "Contact", href: routes.contact },
  ]
  const serviceLinks: Array<{ label: string; href: string }> = [
    { label: isNL ? "Begeleiding" : "Guidance", href: `${routes.diensten}#begeleiding` },
    { label: isNL ? "Educatie" : "Education", href: `${routes.diensten}#educatie` },
    { label: "Expertise", href: `${routes.diensten}#expertise` },
  ]

  const colHead = {
    fontFamily: "var(--font-body)",
    fontSize: "11px",
    fontWeight: 700 as const,
    letterSpacing: "0.13em",
    color: "var(--primary)",
  }
  const linkStyle = {
    fontFamily: "var(--font-body)",
    fontSize: "14px",
    color: "rgba(255,255,255,0.62)",
  }

  return (
    <footer style={{ backgroundColor: "#31202E" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[auto_1px_auto_auto_auto] lg:justify-between gap-10 lg:gap-8 py-14 lg:py-16"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}
        >
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logoMoveri} alt="Moveri – Talent & Performance" className="h-[88px] w-auto mb-5" width={480} height={192} />
            <p style={{ ...linkStyle, color: "rgba(255,255,255,0.52)", lineHeight: "1.85" }}>
              {isNL ? "Ontdekken. Ontwikkelen. Groeien." : "Discover. Develop. Grow."}<br />
              {isNL ? "Met aandacht voor de mens en oog voor het geheel." : "With attention for the person and an eye for the whole."}
            </p>
          </div>

          <div className="hidden lg:block w-px" style={{ backgroundColor: "rgba(255,255,255,0.10)" }} />

          <div>
            <p className="uppercase mb-5" style={colHead}>{isNL ? "Snel naar" : "Navigate"}</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-left hover:text-white transition-colors" style={linkStyle}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="uppercase mb-5" style={colHead}>{isNL ? "Diensten" : "Services"}</p>
            <div className="flex flex-col gap-3">
              {serviceLinks.map((l) => (
                <a key={l.label} href={l.href} className="text-left hover:text-white transition-colors" style={linkStyle}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="uppercase mb-5" style={colHead}>Contact</p>

            <a
              href={routes.contact}
              className="text-sm font-semibold mb-6 block hover:opacity-75 transition-opacity text-left"
              style={{ color: "rgba(255,255,255,0.88)", fontFamily: "var(--font-body)" }}
            >
              {isNL ? "Neem contact op" : "Get in touch"} →
            </a>

            <address className="not-italic mb-8" style={{ ...linkStyle, color: "rgba(255,255,255,0.48)", lineHeight: "1.9" }}>
              Veilingstraat 30<br />
              7391 GM Twello<br />
              Nederland
            </address>

            <p className="uppercase mb-4" style={colHead}>{isNL ? "Volg Moveri" : "Follow Moveri"}</p>

            <div className="flex gap-2.5">
              {[
                { href: "https://www.instagram.com/moveri.eu", label: "Instagram", icon: <Instagram size={15} /> },
                { href: "https://www.linkedin.com/in/irene-faber-9b30a59a/", label: "LinkedIn", icon: <Linkedin size={15} /> },
                {
                  href: "https://www.researchgate.net/profile/Irene-Faber/research",
                  label: "ResearchGate",
                  icon: <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.03em", fontFamily: "var(--font-body)" }}>RG</span>,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center transition-all hover:border-primary/80 hover:text-primary"
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1.5px solid rgba(255,255,255,0.35)",
                    borderRadius: "8px",
                    color: "rgba(255,255,255,0.65)",
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          style={{ color: "rgba(255,255,255,0.30)", fontFamily: "var(--font-body)", fontSize: "12px" }}
        >
          <span>© 2026 Moveri – Talent &amp; Performance</span>
          <span>KvK 42095103 · BTW-ID NL005494442B16</span>
          <div className="flex gap-4">
            <a href={privacyRoute} className="hover:text-white/55 transition-colors" style={{ fontFamily: "inherit", fontSize: "inherit", fontWeight: "inherit" }}>
              {isNL ? "Privacyverklaring" : "Privacy policy"}
            </a>
            <a href={termsRoute} className="hover:text-white/55 transition-colors" style={{ fontFamily: "inherit", fontSize: "inherit", fontWeight: "inherit" }}>
              {isNL ? "Algemene voorwaarden" : "Terms & conditions"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
