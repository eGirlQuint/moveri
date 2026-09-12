"use client"

import { ArrowRight, Eye, Share2, Compass, Sprout, Quote, type LucideIcon } from "lucide-react"
import { translations } from "@/i18n/translations"
import { useLang } from "@/i18n/LangProvider"
import { routes } from "@/lib/routes"

const photoIrene = "/images/over-irene-bio.webp"
const photoBooks = "/images/diensten-expertise.webp"

const iconMap: Record<string, LucideIcon> = { Eye, Share2, Compass, Sprout }

const btnStyle: React.CSSProperties = {
  backgroundColor: "var(--primary)",
  color: "white",
  fontFamily: "var(--font-body)",
  fontWeight: 600,
  fontSize: "14px",
  borderRadius: "9999px",
  padding: "14px 28px",
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  border: "none",
  cursor: "pointer",
}

const kickerLabel: React.CSSProperties = {
  color: "var(--primary)",
  fontFamily: "var(--font-body)",
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "0.14em",
}

const miniHeading: React.CSSProperties = {
  color: "var(--primary)",
  fontFamily: "var(--font-body)",
  fontSize: "11px",
  fontWeight: 800,
  letterSpacing: "0.1em",
}

const anchorOffset: React.CSSProperties = { scrollMarginTop: "5rem" }

export function OverPage() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <>
      {/* Hero */}
      <section className="w-full relative overflow-hidden" style={{ backgroundColor: "var(--background)", minHeight: "600px" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10" style={{ minHeight: "600px" }}>
          <div className="lg:w-[44%] py-16 lg:py-24 flex flex-col justify-center">
            <p style={{ ...kickerLabel, marginBottom: "20px" }}>{t.oHeroLabel}</p>
            <h1 style={{ color: "var(--foreground)", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", lineHeight: 1.12, fontFamily: "var(--font-body)", whiteSpace: "pre-line", marginBottom: "22px" }}>
              {t.oHeroTitle}
            </h1>
            <p style={{ color: "var(--foreground)", opacity: 0.65, maxWidth: "440px", fontFamily: "var(--font-body)", lineHeight: 1.65, marginBottom: "24px" }}>
              {t.oHeroSub}
            </p>
            <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "18px", maxWidth: "440px", marginBottom: "32px" }}>
              <p style={{ color: "var(--foreground)", opacity: 0.85, fontStyle: "italic", fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                {t.oHeroQuote}
              </p>
            </div>
            <a href="#verhaal" style={{ color: "var(--primary)", fontFamily: "var(--font-body)", fontSize: "15px", fontWeight: 700 }}>
              {t.oHeroLink}
            </a>
          </div>
        </div>
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[58%]" style={{ maxWidth: "1000px" }}>
          <img
            src={photoIrene}
            alt="Irene Faber"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "center 30%",
              maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 16%, rgba(0,0,0,0.75) 32%, black 50%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 16%, rgba(0,0,0,0.75) 32%, black 50%)",
            }}
            loading="lazy"
          />
        </div>
        <div className="lg:hidden mx-6 mb-10 overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
          <img src={photoIrene} alt="Irene Faber" className="w-full h-full object-cover" style={{ objectPosition: "center 30%" }} loading="lazy" />
        </div>
      </section>

      {/* Verschillende rollen, verschillende perspectieven */}
      <section id="verhaal" className="w-full relative overflow-hidden" style={{ backgroundColor: "#FBF0F2", minHeight: "620px", ...anchorOffset }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10" style={{ minHeight: "620px" }}>
          <div className="lg:w-[54%] py-16 lg:py-24 flex flex-col justify-center">
            <p style={{ ...kickerLabel, marginBottom: "20px" }}>{t.oRolesLabel}</p>
            <h2 style={{ color: "var(--foreground)", fontWeight: 700, fontSize: "clamp(1.9rem, 3.2vw, 2.9rem)", lineHeight: 1.1, fontFamily: "var(--font-body)", whiteSpace: "pre-line", marginBottom: "20px" }}>
              {t.oRolesTitle}
            </h2>
            <p style={{ color: "var(--foreground)", opacity: 0.7, maxWidth: "460px", fontFamily: "var(--font-body)", lineHeight: 1.65, marginBottom: "24px" }}>
              {t.oRolesText1}
            </p>
            <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "18px", maxWidth: "460px", marginBottom: "24px" }}>
              <p style={{ color: "var(--foreground)", opacity: 0.85, fontStyle: "italic", fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                {t.oRolesQuote1}
              </p>
            </div>
            <p style={{ color: "var(--foreground)", opacity: 0.7, maxWidth: "460px", fontFamily: "var(--font-body)", lineHeight: 1.65 }}>
              {t.oRolesText2}
            </p>
          </div>
        </div>
        <div className="hidden lg:flex absolute inset-y-0 right-0 w-[38%] items-center justify-center px-8" style={{ maxWidth: "650px" }} aria-hidden>
          <div className="w-full h-[76%] rounded-[2rem] overflow-hidden shadow-xl">
            <img src={photoBooks} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Mijn missie & mijn visie */}
      <section className="w-full relative overflow-hidden py-16 lg:py-24" style={{ backgroundColor: "#31202E" }}>
        <div className="absolute inset-y-0 right-0 w-[50%] pointer-events-none hidden lg:block" aria-hidden>
          <svg className="absolute" style={{ right: "-100px", top: "-60px", width: "640px", height: "640px" }} viewBox="0 0 640 640" fill="none">
            <circle cx="320" cy="320" r="300" stroke="rgba(139,175,135,0.30)" strokeWidth="14" />
          </svg>
          <svg className="absolute" style={{ right: "-40px", top: "50%", width: "480px", height: "480px", transform: "translateY(-50%)" }} viewBox="0 0 480 480" fill="none">
            <circle cx="240" cy="240" r="220" stroke="rgba(204,85,200,0.55)" strokeWidth="17" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
          <p style={{ ...kickerLabel, marginBottom: "32px" }}>{t.oDriveLabel}</p>
          <div className="relative grid lg:grid-cols-2 gap-14 lg:gap-20">
            <div className="hidden lg:block absolute top-0 bottom-0 w-px" style={{ left: "50%", backgroundColor: "rgba(255,255,255,0.15)" }} />
            <div>
              <p style={{ ...miniHeading, marginBottom: "14px" }}>
                {t.oMissieHeading}
              </p>
              <p style={{ color: "rgba(255,248,240,0.85)", fontFamily: "var(--font-body)", lineHeight: 1.65, marginBottom: "16px", maxWidth: "460px" }}>
                {t.oMissieText1}
              </p>
              <p style={{ color: "rgba(255,248,240,0.68)", fontFamily: "var(--font-body)", lineHeight: 1.65, maxWidth: "460px" }}>
                {t.oMissieText2}
              </p>
            </div>

            <div className="border-t lg:border-t-0 pt-7 lg:pt-0" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
              <p style={{ ...miniHeading, marginBottom: "14px" }}>
                {t.oVisieHeading}
              </p>
              <p style={{ color: "rgba(255,248,240,0.85)", fontFamily: "var(--font-body)", lineHeight: 1.65, marginBottom: "20px", maxWidth: "460px" }}>
                {t.oVisieText1}
              </p>
              <div className="flex items-start gap-2.5">
                <Quote size={18} className="flex-shrink-0 mt-1" style={{ color: "var(--primary)", opacity: 0.55 }} />
                <p style={{ color: "rgb(255,248,240)", fontStyle: "italic", fontFamily: "var(--font-body)", lineHeight: 1.65, maxWidth: "440px" }}>
                  {t.oVisieText2}
                </p>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", marginTop: "56px", paddingTop: "36px" }}>
            <p style={{ ...kickerLabel, marginBottom: "28px" }}>{t.oStandLabel}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
              {t.oStandItems.map((item, i) => {
                const Icon = iconMap[item.icon]
                const isLast = i === t.oStandItems.length - 1
                return (
                  <div key={i} className="relative px-0 lg:px-4">
                    {!isLast && (
                      <div className="hidden lg:block absolute right-0 top-[6%] bottom-[6%] w-px" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />
                    )}
                    {Icon && <Icon size={26} strokeWidth={1.75} className="mb-3" style={{ color: "var(--primary)" }} />}
                    <p style={{ color: "rgb(255,248,240)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em", fontFamily: "var(--font-body)", marginBottom: "8px" }}>
                      {item.label}
                    </p>
                    <p style={{ color: "rgba(255,248,240,0.62)", fontSize: "0.92rem", lineHeight: 1.55, fontFamily: "var(--font-body)", maxWidth: "220px" }}>
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Wetenschap én praktijk */}
      <section className="w-full py-16 lg:py-24" style={{ backgroundColor: "#E0EAE6" }}>
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20">
          <div className="hidden lg:block absolute top-0 bottom-0 w-px" style={{ left: "50%", backgroundColor: "rgba(20,45,30,0.18)" }} />
          <div>
            <p style={{ ...kickerLabel, marginBottom: "20px" }}>{t.oScienceLabel}</p>
            <p style={{ color: "var(--foreground)", fontFamily: "var(--font-body)", lineHeight: 1.65, marginBottom: "18px", maxWidth: "480px" }}>
              {t.oScienceText1}
            </p>
            <p style={{ color: "var(--foreground)", opacity: 0.7, fontFamily: "var(--font-body)", lineHeight: 1.65, maxWidth: "480px" }}>
              {t.oScienceText2}
            </p>
          </div>

          <div className="border-t lg:border-t-0 pt-7 lg:pt-0" style={{ borderColor: "rgba(20,45,30,0.18)" }}>
            <p style={{ ...kickerLabel, marginBottom: "20px" }}>{t.oNowLabel}</p>
            <p style={{ color: "var(--foreground)", opacity: 0.75, fontFamily: "var(--font-body)", lineHeight: 1.6, marginBottom: "22px", maxWidth: "480px" }}>
              {t.oNowIntro}
            </p>
            <ul style={{ marginBottom: "24px" }}>
              {t.oNowItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5" style={{ marginBottom: "12px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "var(--primary)", flexShrink: 0, marginTop: "8px" }} />
                  <p style={{ color: "var(--foreground)", opacity: 0.85, fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.55, maxWidth: "460px" }}>{item}</p>
                </li>
              ))}
            </ul>
            <p style={{ color: "var(--foreground)", opacity: 0.6, fontFamily: "var(--font-body)", fontSize: "0.92rem", lineHeight: 1.6, maxWidth: "480px" }}>
              {t.oNowOutro}
            </p>
          </div>
        </div>
      </section>

      {/* Persoonlijk en betrokken + closing quote */}
      <section className="w-full relative overflow-hidden py-16 lg:py-24" style={{ backgroundColor: "var(--foreground)" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <p style={{ ...kickerLabel, marginBottom: "20px" }}>{t.oPersonalLabel}</p>
              <p style={{ color: "rgba(255,248,240,0.65)", fontFamily: "var(--font-body)", lineHeight: 1.7, maxWidth: "460px", marginBottom: "32px" }}>
                {t.oPersonalText}
              </p>
              <a href={routes.contact} style={btnStyle}>
                {t.dienstenBtn} <ArrowRight size={16} />
              </a>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "28px" }}>
              <Quote size={28} style={{ color: "var(--primary)", opacity: 0.5, marginBottom: "16px" }} />
              <p style={{ color: "rgb(255,248,240)", fontWeight: 700, fontSize: "1.4rem", lineHeight: 1.4, fontFamily: "var(--font-body)", maxWidth: "440px" }}>
                {t.oClosingQuote}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
