"use client"

import { ArrowRight, Brain, Users, Presentation, Microscope, type LucideIcon } from "lucide-react"
import { translations } from "@/i18n/translations"
import { useLang } from "@/i18n/LangProvider"
import { routes } from "@/lib/routes"
import { DF } from "@/lib/style"
import { PrimaryBtn, OutlineBtn } from "@/components/buttons"
import { QuestionRow } from "@/components/QuestionRow"
import { Blob } from "@/components/Blob"

const heroMain = "/images/hero-main.webp"
const werkwijzePhoto = "/images/werkwijze-photo.webp"
const overMoveriHome = "/images/over-moveri-home.webp"
const logoAscent = "/images/logo-partner-ascent.webp"
const logo4itruvian = "/images/logo-partner-4itruvian.webp"
const logo18Yards = "/images/logo-partner-18yards.webp"
const logoTides = "/images/logo-partner-tides.webp"
const logoTrias = "/images/logo-partner-trias.webp"
const logoKrachtcentrale = "/images/logo-partner-krachtcentrale.png"

const iconMap: Record<string, LucideIcon> = { Brain, Users, Presentation, Microscope }

const partnerLogos: Array<{ src: string; alt: string; h: number; round?: boolean; href: string }> = [
  { src: logoAscent, alt: "Ascent Academy", h: 72, href: "https://ascent-academy.eu/" },
  { src: logo4itruvian, alt: "4itruvian", h: 80, href: "https://www.4itruvian.com/" },
  { src: logo18Yards, alt: "18 Yards Sports Marketing", h: 76, round: true, href: "https://18yards.nl/" },
  { src: logoTides, alt: "TIDES Society", h: 70, href: "https://tides-society.com/" },
  { src: logoTrias, alt: "Trias", h: 76, href: "https://www.ttv-trias.nl/" },
  { src: logoKrachtcentrale, alt: "Krachtcentrale", h: 76, href: "https://krachtcentrale.nl/locatie/zwolle-victorium/" },
]

export function HomePage() {
  const { lang } = useLang()
  const t = translations[lang]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-32 lg:pb-40 lg:min-h-[780px]">
        <div
          className="absolute -top-20 -right-20 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-accent/30 pointer-events-none -z-10"
          style={{ borderRadius: "40% 60% 40% 60% / 60% 40% 60% 40%" }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="relative z-10">
              <p className="text-primary font-medium text-sm mb-5 italic" style={DF}>{t.heroTagline}</p>
              <h1 className="text-foreground mb-6 leading-[1.08]" style={{ ...DF, fontSize: "clamp(2.6rem, 7vw, 5rem)", fontWeight: 700 }}>
                {t.heroH1a}<br />
                <span className="text-primary">{t.heroH1b}</span>
              </h1>
              <p className="text-base lg:text-lg text-foreground/65 leading-relaxed mb-10 max-w-lg">{t.heroSub}</p>
              <div className="flex flex-wrap gap-4">
                <PrimaryBtn href={routes.diensten}>
                  {t.heroCta} <ArrowRight size={16} />
                </PrimaryBtn>
                <OutlineBtn href={routes.contact}>{t.heroCtaAlt}</OutlineBtn>
              </div>
            </div>

            <div
              className="absolute top-0 right-0 w-1/2 h-full hidden lg:block"
              style={{
                maxWidth: "860px",
                clipPath: "path('M 60,0 C 0,130 90,270 20,430 C -30,560 80,680 10,840 C -20,920 40,975 60,1000 L 1000,1000 L 1000,0 Z')",
                transform: "scale(1.05)",
                transformOrigin: "right center",
              }}
            >
              <img
                src={heroMain}
                alt="Twee tafeltennissers met Moveri-shirts"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "center center", filter: "brightness(0.88) saturate(0.82)" }}
                fetchPriority="high"
              />
            </div>

            <div className="lg:hidden relative mt-10">
              <div className="overflow-hidden shadow-2xl bg-secondary" style={{ borderRadius: "2.5rem 4rem 2.5rem 4rem" }}>
                <img
                  src={heroMain}
                  alt="Twee tafeltennissers met Moveri-shirts"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3", objectPosition: "center 20%" }}
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Banner */}
      <div className="w-full" style={{ backgroundColor: "var(--foreground)" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {t.expertiseBanner.map((item, i) => {
              const Icon = iconMap[item.icon]
              const isLast = i === t.expertiseBanner.length - 1
              return (
                <div key={i} className="relative flex flex-col items-center justify-center text-center py-6 px-6 sm:py-7">
                  {!isLast && (
                    <div className="hidden lg:block absolute right-0 top-[20%] bottom-[20%] w-px" style={{ backgroundColor: "rgba(255,248,240,0.18)" }} />
                  )}
                  {!isLast && (
                    <div className="lg:hidden absolute bottom-0 left-[10%] right-[10%] h-px sm:hidden" style={{ backgroundColor: "rgba(255,248,240,0.15)" }} />
                  )}
                  {Icon && <Icon size={30} strokeWidth={1.5} className="mb-3 flex-shrink-0" style={{ color: "var(--primary)" }} />}
                  <p className="mb-1" style={{ color: "rgb(255,248,240)", fontSize: "14px", fontWeight: 600, letterSpacing: "0.08em" }}>
                    {item.title}
                  </p>
                  <p style={{ color: "rgba(255,248,240,0.72)", fontSize: "13px", lineHeight: "18px", fontWeight: 400 }}>
                    {item.sub}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Services Cards */}
      <section className="w-full py-24 lg:py-28" style={{ backgroundColor: "#F5F1EC" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <p className="text-xs font-extrabold tracking-[0.14em] mb-4" style={{ color: "var(--primary)", fontFamily: "var(--font-body)" }}>
            {t.servicesLabel}
          </p>
          <h2 className="text-3xl lg:text-4xl mb-5 leading-tight" style={{ color: "var(--foreground)", fontFamily: "var(--font-body)", fontWeight: 600 }}>
            {t.servicesTitle}
          </h2>
          <p className="text-base leading-relaxed mb-12 max-w-[680px]" style={{ color: "var(--foreground)", opacity: 0.65 }}>
            {t.servicesIntro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {t.serviceCards.map((card, i) => {
              const accentColors = ["#B85C7A", "var(--foreground)", "#B8916A"]
              return (
                <div
                  key={i}
                  className="flex flex-col p-8 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "#EDEAE5",
                    borderRadius: "14px",
                    border: "1px solid rgba(20,45,30,0.10)",
                    borderTop: `3px solid ${accentColors[i]}`,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)")}
                >
                  <h3 className="mb-4" style={{ color: "var(--foreground)", fontSize: "clamp(1.4rem, 2vw, 1.65rem)", fontWeight: 600, fontFamily: "var(--font-body)", lineHeight: 1.2 }}>
                    {card.title}
                  </h3>
                  <p className="text-base leading-relaxed flex-1" style={{ color: "var(--foreground)", opacity: 0.80 }}>
                    {card.text}
                  </p>
                  <a
                    href={`${routes.diensten}#${card.anchor}`}
                    className="mt-6 text-sm font-semibold text-left transition-opacity hover:opacity-70"
                    style={{ color: accentColors[i], fontFamily: "var(--font-body)" }}
                  >
                    {card.cta}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="w-full py-24 lg:py-28" style={{ backgroundColor: "#E6C9D1" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row" style={{ gap: "80px" }}>
            <div className="lg:w-[42%] flex-shrink-0 flex flex-col justify-center">
              <p className="text-xs font-extrabold tracking-[0.14em] mb-5" style={{ color: "var(--primary)", fontFamily: "var(--font-body)" }}>
                {t.questionsLabel}
              </p>
              <h2
                className="mb-8"
                style={{ color: "var(--foreground)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)", lineHeight: 1.08, whiteSpace: "pre-line" }}
              >
                {t.questionsTitle}
              </h2>
              <a href={routes.contact} className="text-sm font-semibold transition-opacity hover:opacity-70 text-left" style={{ color: "var(--primary)", fontFamily: "var(--font-body)" }}>
                {t.questionsCta}
              </a>
            </div>

            <div className="lg:w-[58%]">
              {t.questions.map((item, i) => (
                <QuestionRow key={i} category={item.category} question={item.q} href={`${routes.diensten}#${item.anchor}`} />
              ))}
              <div style={{ borderBottom: "1px solid rgba(20,45,30,0.25)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="w-full overflow-hidden" style={{ backgroundColor: "#412B3D" }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-start">
            <div className="lg:w-[42%] flex-shrink-0 flex flex-col pt-14 lg:pt-16 pb-14 lg:pb-16 pr-0 lg:pr-14">
              <p className="text-xs font-extrabold tracking-[0.14em] mb-5" style={{ color: "var(--primary)", fontFamily: "var(--font-body)" }}>
                {t.werkwijzeLabel}
              </p>
              <h2
                className="mb-5"
                style={{ color: "rgba(255,248,240,0.96)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: 1.08, whiteSpace: "pre-line" }}
              >
                {t.werkwijzeTitle}
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,248,240,0.65)", fontFamily: "var(--font-body)" }}>
                {t.werkwijzeIntro}
              </p>
              <div className="relative w-40 sm:w-48">
                <Blob
                  className="w-28 h-28 -bottom-5 -right-5 opacity-25"
                  style={{ background: "var(--primary)", borderRadius: "55% 45% 60% 40% / 50% 55% 45% 50%" }}
                />
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={werkwijzePhoto}
                    alt="One step at a time"
                    width={1000}
                    height={1067}
                    className="w-full h-auto block"
                    style={{ filter: "saturate(0.85) brightness(1.05)" }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-[58%] flex flex-col lg:pl-14 pt-14 lg:pt-16 pb-14 lg:pb-16">
              <div style={{ borderTop: "1px solid rgba(255,248,240,0.18)" }} />
              <div className="flex flex-col">
                {t.werkwijzeSteps.map((step, i) => (
                  <div key={i} className="py-6" style={{ borderBottom: "1px solid rgba(255,248,240,0.18)" }}>
                    <div>
                      <p className="mb-2" style={{ color: "rgba(255,248,240,0.96)", fontSize: "clamp(1.35rem, 2vw, 1.65rem)", fontWeight: 700, fontFamily: "var(--font-body)", lineHeight: 1.15 }}>
                        {step.title}
                      </p>
                      <p style={{ color: "rgba(255,248,240,0.62)", fontSize: "15px", lineHeight: "1.7", fontFamily: "var(--font-body)" }}>
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Over Moveri / Irene */}
      <section className="w-full overflow-hidden relative" style={{ backgroundColor: "#F8F4EF", minHeight: "580px" }}>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="lg:w-[46%] py-20 lg:py-28 flex flex-col justify-center">
            <p className="text-xs font-extrabold tracking-[0.14em] mb-6" style={{ color: "var(--primary)", fontFamily: "var(--font-body)" }}>
              {t.overMoveriLabel}
            </p>

            <h2
              className="mb-7"
              style={{ color: "var(--foreground)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "clamp(2.4rem, 4vw, 3.4rem)", lineHeight: 1.08, whiteSpace: "pre-line" }}
            >
              {t.overMoveriTitle}
            </h2>
            <p className="mb-4 text-base leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.68, fontFamily: "var(--font-body)", maxWidth: "420px" }}>
              {t.overMoveriP1}
            </p>
            <p className="mb-10 text-base leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.68, fontFamily: "var(--font-body)", maxWidth: "420px" }}>
              {t.overMoveriP2}
            </p>
            <a
              href={routes.over}
              className="inline-flex items-center gap-2 self-start px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "var(--primary)", color: "white", fontFamily: "var(--font-body)" }}
            >
              {t.overMoveriCta} <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="hidden lg:block absolute inset-y-0 right-0 w-[58%]" style={{ maxWidth: "1000px" }}>
          <img
            src={overMoveriHome}
            alt="Irene Faber coaching een speelster"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "30% center",
              filter: "saturate(0.92) brightness(1.02)",
              maskImage: "linear-gradient(to right, transparent 0%, black 22%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 22%)",
            }}
            loading="lazy"
          />
        </div>

        <div className="lg:hidden mt-4 mb-8 mx-6 overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
          <img src={overMoveriHome} alt="Irene Faber coaching een speelster" className="w-full h-full object-cover" style={{ objectPosition: "30% center" }} loading="lazy" />
        </div>
      </section>

      {/* Partners */}
      <section className="w-full py-16 lg:py-20" style={{ backgroundColor: "#E0EAE6" }}>
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-xs font-extrabold tracking-[0.14em] mb-4" style={{ color: "var(--primary)", fontFamily: "var(--font-body)" }}>
              {t.partnersLabel}
            </p>
            <h2 className="mb-3" style={{ color: "var(--foreground)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "clamp(1.9rem, 3.8vw, 3rem)", lineHeight: 1.1 }}>
              {t.partnersTitle}
            </h2>
            <p className="text-base leading-relaxed max-w-[560px]" style={{ color: "var(--foreground)", opacity: 0.65, fontFamily: "var(--font-body)" }}>
              {t.partnersText}
            </p>
          </div>

          <div className="overflow-hidden" style={{ backgroundColor: "#FFFFFF", borderRadius: "12px" }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 -mb-px -mr-px">
              {partnerLogos.map((logo, i) => (
                <div key={i} className="flex items-center justify-center py-8 px-4" style={{ borderRight: "1px solid rgba(0,0,0,0.08)", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                  <a href={logo.href} target="_blank" rel="noopener noreferrer" aria-label={logo.alt} className="flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      style={{
                        height: `${logo.h}px`,
                        width: "auto",
                        maxWidth: "100%",
                        objectFit: "contain",
                        display: "block",
                        borderRadius: logo.round ? "50%" : undefined,
                      }}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="w-full relative overflow-hidden py-16 lg:py-24" style={{ backgroundColor: "var(--foreground)" }}>
        <div
          className="absolute inset-y-0 right-0 hidden w-[58%] overflow-hidden pointer-events-none lg:block"
          aria-hidden="true"
        >
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 760 620"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient
                id="cta-flow"
                x1="760"
                y1="40"
                x2="350"
                y2="600"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8BAF87" />
                <stop offset="0.48" stopColor="#CC55C8" />
                <stop offset="1" stopColor="#F2A875" />
              </linearGradient>

            </defs>

            {/* Main flowing ribbon */}
            <path
              d="
                M800 42
                C610 70 704 202 518 230
                C344 256 384 408 566 424
                C742 440 654 558 438 618
              "
              stroke="url(#cta-flow)"
              strokeWidth="13"
              strokeLinecap="round"
              opacity="0.88"
            />

            {/* Fine contour lines */}
            <path
              d="
                M820 2
                C632 38 740 166 548 198
                C362 228 404 368 596 390
                C774 410 700 530 486 592
              "
              stroke="#8BAF87"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.32"
            />

            <path
              d="
                M788 88
                C592 106 674 244 492 270
                C326 294 354 448 540 462
                C702 474 606 592 400 640
              "
              stroke="#CC55C8"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.38"
            />

            <path
              d="
                M840 132
                C646 122 716 288 528 306
                C372 322 402 474 580 486
                C718 496 666 566 534 632
              "
              stroke="rgba(255,248,240,0.24)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
          <div style={{ maxWidth: "600px" }}>
            <p className="text-xs font-extrabold tracking-[0.14em] mb-6" style={{ color: "var(--primary)", fontFamily: "var(--font-body)" }}>
              {t.homeCTALabel}
            </p>

            <h2 className="mb-6" style={{ color: "rgb(255,248,240)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "clamp(2.4rem, 4.5vw, 3.5rem)", lineHeight: 1.08, whiteSpace: "pre-line" }}>
              {t.homeCTATitle}
            </h2>

            <p className="mb-10 text-base leading-relaxed" style={{ color: "rgba(255,248,240,0.68)", fontFamily: "var(--font-body)", maxWidth: "480px" }}>
              {t.homeCTAText}
            </p>

            <a
              href={routes.contact}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "var(--primary)", color: "white", fontFamily: "var(--font-body)" }}
            >
              {t.homeCTABtn} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
