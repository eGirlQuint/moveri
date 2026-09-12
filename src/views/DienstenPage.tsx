"use client"

import { ArrowRight } from "lucide-react"
import { translations } from "@/i18n/translations"
import { useLang } from "@/i18n/LangProvider"
import { routes } from "@/lib/routes"

const photoBegeleiding = "/images/diensten-begeleiding.webp"
const photoEducatie = "/images/diensten-educatie.webp"
const photoExpertise = "/images/diensten-expertise.webp"

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

const anchorOffset: React.CSSProperties = { scrollMarginTop: "5rem" }

export function DienstenPage() {
  const { lang } = useLang()
  const t = translations[lang]
  const ctaTitleWords = t.dienstenCTATitle.split(" ")
  const ctaTitleLead = ctaTitleWords.slice(0, -1).join(" ")
  const ctaTitleAccent = ctaTitleWords[ctaTitleWords.length - 1]

  return (
    <>
      {/* Hero */}
      <section className="w-full flex flex-col lg:flex-row" style={{ minHeight: "520px" }}>
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-20 lg:py-28" style={{ backgroundColor: "var(--background)" }}>
          <div className="flex">
            <div className="hidden lg:block" style={{ flexGrow: 1.4, flexShrink: 0 }} />
            <div style={{ maxWidth: "520px", minWidth: 0 }}>
              <p style={{ color: "var(--primary)", fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 800, letterSpacing: "0.14em", marginBottom: "24px" }}>
                {t.dienstenHeroLabel}
              </p>
              <h1 style={{ color: "var(--foreground)", fontWeight: 800, fontSize: "clamp(2.6rem, 4.8vw, 4rem)", lineHeight: 1.06, fontFamily: "var(--font-body)", whiteSpace: "pre-line", marginBottom: "24px" }}>
                {t.dienstenHeroTitle}
              </h1>
              <p style={{ color: "var(--foreground)", opacity: 0.65, maxWidth: "480px", fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.65, marginBottom: "40px" }}>
                {t.dienstenHeroSub}
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <a href={routes.contact} style={btnStyle}>
                  {t.dienstenHeroBtn} <ArrowRight size={16} />
                </a>
                <a href="#begeleiding" style={{ color: "var(--foreground)", fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 600 }}>
                  {t.dienstenHeroAlt}
                </a>
              </div>
            </div>
            <div className="hidden lg:block" style={{ flexGrow: 1, flexShrink: 0 }} />
          </div>
        </div>
        <div className="lg:w-[45%] flex flex-col justify-center px-8 lg:px-14 py-16 lg:py-28" style={{ backgroundColor: "#31202E" }}>
          <div className="mx-auto" style={{ maxWidth: "480px" }}>
            <div style={{ width: "80px", height: "2px", backgroundColor: "var(--primary)", marginBottom: "32px" }} />
            <p style={{ color: "rgb(255,248,240)", fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.75rem)", lineHeight: 1.2, fontFamily: "var(--font-body)", whiteSpace: "pre-line", fontStyle: "italic" }}>
              {t.dienstenHeroQuestion}
            </p>
          </div>
        </div>
      </section>

      {/* Begeleiding */}
      <section id="begeleiding" className="w-full relative overflow-hidden" style={{ backgroundColor: "#FBF0F2", minHeight: "560px", ...anchorOffset }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10" style={{ minHeight: "560px" }}>
          <div className="lg:w-[52%] py-16 lg:py-24 flex flex-col justify-center">
            <p style={{ color: "#B85C7A", fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 800, letterSpacing: "0.14em", marginBottom: "20px" }}>
              {t.dienstenBLabel}
            </p>
            <h2 style={{ color: "var(--foreground)", fontWeight: 700, fontSize: "clamp(1.9rem, 3.2vw, 2.9rem)", lineHeight: 1.1, fontFamily: "var(--font-body)", whiteSpace: "pre-line", marginBottom: "20px" }}>
              {t.dienstenBTitle}
            </h2>
            <p style={{ color: "var(--foreground)", opacity: 0.65, maxWidth: "440px", fontFamily: "var(--font-body)", lineHeight: 1.65, marginBottom: "32px" }}>
              {t.dienstenBSub}
            </p>
            {t.dienstenBItems.map((item, i) => (
              <div key={i} style={{ borderTop: "1px solid rgba(20,45,30,0.18)", paddingTop: "18px", marginBottom: "18px", maxWidth: "420px" }}>
                <p style={{ color: "var(--foreground)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.1em", fontFamily: "var(--font-body)", marginBottom: "8px" }}>{item.title}</p>
                <p style={{ color: "var(--foreground)", opacity: 0.65, fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: "400px" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[36%]" style={{ maxWidth: "460px" }}>
          <img
            src={photoBegeleiding}
            alt="Begeleiding"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "center 38%",
              filter: "saturate(0.95) brightness(1.02)",
              maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 8%, black 20%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 8%, black 20%)",
            }}
            loading="lazy"
          />
        </div>
        <div className="lg:hidden mx-6 mb-10 overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
          <img src={photoBegeleiding} alt="Begeleiding" className="w-full h-full object-cover" style={{ objectPosition: "center 38%" }} loading="lazy" />
        </div>
      </section>

      {/* Educatie */}
      <section id="educatie" className="w-full relative overflow-hidden" style={{ backgroundColor: "#31202E", minHeight: "560px", ...anchorOffset }}>
        <div className="hidden lg:block absolute inset-y-0 left-0 w-[46%]" style={{ maxWidth: "780px" }}>
          <img
            src={photoEducatie}
            alt="Educatie"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "center 30%",
              maskImage: "linear-gradient(to left, transparent 0%, rgba(0,0,0,0.6) 8%, black 20%)",
              WebkitMaskImage: "linear-gradient(to left, transparent 0%, rgba(0,0,0,0.6) 8%, black 20%)",
            }}
            loading="lazy"
          />
        </div>
        <div className="lg:hidden overflow-hidden" style={{ aspectRatio: "4/3" }}>
          <img src={photoEducatie} alt="Educatie" className="w-full h-full object-cover" style={{ objectPosition: "center 30%" }} loading="lazy" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10" style={{ minHeight: "560px" }}>
          <div className="ml-auto lg:w-[56%] py-16 lg:py-24 flex flex-col justify-center">
            <p style={{ color: "rgb(255,248,240)", fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 800, letterSpacing: "0.14em", marginBottom: "20px" }}>
              {t.dienstenELabel}
            </p>
            <h2 style={{ color: "rgb(255,248,240)", fontWeight: 700, fontSize: "clamp(1.9rem, 3.2vw, 2.9rem)", lineHeight: 1.1, fontFamily: "var(--font-body)", whiteSpace: "pre-line", marginBottom: "20px" }}>
              {t.dienstenETitle}
            </h2>
            <p style={{ color: "rgba(255,248,240,0.68)", fontFamily: "var(--font-body)", lineHeight: 1.65, marginBottom: "36px", maxWidth: "440px" }}>
              {t.dienstenESub}
            </p>
            <div className="grid grid-cols-2 gap-x-8 mb-10">
              {t.dienstenEItems.map((item, i) => (
                <div key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "16px", paddingBottom: "20px" }}>
                  <div className="flex items-start gap-2.5 mb-2">
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "rgb(255,248,240)", flexShrink: 0, marginTop: "3px" }} />
                    <p style={{ color: "rgb(255,248,240)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.09em", fontFamily: "var(--font-body)" }}>{item.title}</p>
                  </div>
                  <p style={{ color: "rgba(255,248,240,0.62)", fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.6, paddingLeft: "20px" }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="w-full relative overflow-hidden" style={{ backgroundColor: "#F8F4EF", minHeight: "560px", ...anchorOffset }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10" style={{ minHeight: "560px" }}>
          <div className="lg:w-[52%] py-16 lg:py-24 flex flex-col justify-center">
            <p style={{ color: "#B8916A", fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 800, letterSpacing: "0.14em", marginBottom: "20px" }}>
              {t.dienstenXLabel}
            </p>
            <h2 style={{ color: "var(--foreground)", fontWeight: 700, fontSize: "clamp(1.9rem, 3.2vw, 2.9rem)", lineHeight: 1.1, fontFamily: "var(--font-body)", whiteSpace: "pre-line", marginBottom: "20px" }}>
              {t.dienstenXTitle}
            </h2>
            <p style={{ color: "var(--foreground)", opacity: 0.65, maxWidth: "440px", fontFamily: "var(--font-body)", lineHeight: 1.65, marginBottom: "28px" }}>
              {t.dienstenXSub}
            </p>
            {t.dienstenXItems.map((item, i) => (
              <div key={i} style={{ borderTop: "1px solid rgba(20,45,30,0.18)", paddingTop: "14px", marginBottom: "14px", maxWidth: "420px" }}>
                <p style={{ color: "var(--foreground)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.1em", fontFamily: "var(--font-body)", marginBottom: "6px" }}>{item.title}</p>
                <p style={{ color: "var(--foreground)", opacity: 0.65, fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: "420px" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[52%]" style={{ maxWidth: "880px" }}>
          <img
            src={photoExpertise}
            alt="Expertise"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "center 38%",
              filter: "saturate(0.92) brightness(1.04)",
              maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 8%, black 20%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 8%, black 20%)",
            }}
            loading="lazy"
          />
        </div>
        <div className="lg:hidden mx-6 mb-10 overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4" }}>
          <img src={photoExpertise} alt="Expertise" className="w-full h-full object-cover" style={{ objectPosition: "center 38%" }} loading="lazy" />
        </div>
      </section>

      {/* Een Passende Vorm */}
      <section className="w-full py-16 lg:py-24" style={{ backgroundColor: "#E3CBCE" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="mb-6" style={{ color: "var(--primary)", fontFamily: "var(--font-body)", fontSize: "12px", fontWeight: 800, letterSpacing: "0.14em" }}>
              {t.dienstenVormLabel}
            </p>
            <h2 style={{ color: "var(--foreground)", fontWeight: 700, fontSize: "clamp(1.9rem, 3.2vw, 2.9rem)", lineHeight: 1.15, fontFamily: "var(--font-body)", whiteSpace: "pre-line" }}>
              {t.dienstenVormTitle}
            </h2>
            <p style={{ color: "var(--foreground)", opacity: 0.65, fontFamily: "var(--font-body)", lineHeight: 1.65, maxWidth: "380px", marginTop: "20px" }}>
              {t.dienstenVormSub}
            </p>
          </div>
          <div>
            {t.dienstenVormSteps.map((step, i) => (
              <div
                key={i}
                style={{
                  borderTop: "1px solid rgba(20,45,30,0.22)",
                  borderBottom: i === t.dienstenVormSteps.length - 1 ? "1px solid rgba(20,45,30,0.22)" : "none",
                  paddingTop: "20px",
                  paddingBottom: "24px",
                }}
              >
                <p className="mb-2" style={{ color: "var(--foreground)", fontWeight: 700, fontSize: "1rem", fontFamily: "var(--font-body)" }}>{step.title}</p>
                <p style={{ color: "var(--foreground)", opacity: 0.65, fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.6, paddingLeft: "30px" }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="max-w-[1200px] mx-auto px-6 lg:px-10 mt-16 lg:mt-20 pt-12 lg:pt-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
          style={{ borderTop: "1px solid rgba(20,45,30,0.22)" }}
        >
          <h2 style={{ color: "var(--foreground)", fontFamily: "var(--font-body)", fontWeight: 800, fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)", lineHeight: 1.18 }}>
            {ctaTitleLead} <em style={{ fontStyle: "italic", color: "var(--primary)" }}>{ctaTitleAccent}</em>
          </h2>

          <a
            href={routes.contact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:opacity-90 hover:-translate-y-0.5 flex-shrink-0"
            style={{ backgroundColor: "var(--primary)", color: "white", fontFamily: "var(--font-body)", boxShadow: "0 14px 32px -10px rgba(204,85,200,0.4)" }}
          >
            {t.dienstenCTABtn} <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  )
}
