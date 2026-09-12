"use client"

import { ArrowRight } from "lucide-react"
import { translations } from "@/i18n/translations"
import { useLang } from "@/i18n/LangProvider"
import { DF } from "@/lib/style"
import { SectionLabel } from "@/components/SectionLabel"
import { ActueelCard } from "@/components/ActueelCard"
import { routes, actueelPostRoute } from "@/lib/routes"
import { actueelPosts, bi } from "@/lib/actueelPosts"

export function ActueelPage() {
  const { lang } = useLang()
  const t = translations[lang]

  const [featured, ...rest] = actueelPosts

  return (
    <>
      <section className="max-w-[1180px] mx-auto px-6 lg:px-10 pt-16 lg:pt-20 pb-8">
        <div className="max-w-[720px]">
          <SectionLabel>{t.actueelLabel}</SectionLabel>
          <h1 className="mb-6" style={{ ...DF, color: "var(--foreground)", fontWeight: 700, fontSize: "clamp(2.4rem, 5.5vw, 3.75rem)", lineHeight: 1.06, letterSpacing: "-0.02em" }}>
            {t.actueelHeroTitleA}
            <br />
            <span style={{ color: "var(--primary)" }}>{t.actueelHeroTitleB}</span>
          </h1>
          <p className="text-base lg:text-lg leading-relaxed" style={{ ...DF, color: "var(--foreground)", opacity: 0.68 }}>
            {t.actueelHeroSub}
          </p>
        </div>
      </section>

      {featured && (
        <section className="max-w-[1180px] mx-auto px-6 lg:px-10 pb-6">
          <a
            href={actueelPostRoute(featured.slug)}
            className="grid grid-cols-1 lg:grid-cols-[0.85fr_1fr] overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              borderTop: `3px solid ${featured.categoryColor}`,
              boxShadow: "0 2px 24px rgba(44,85,69,0.08)",
            }}
          >
            <div className="relative overflow-hidden" style={{ backgroundColor: "#E3DED6", minHeight: "220px" }}>
              <img src={featured.heroImage.src} alt={bi(featured.heroImage.alt, lang)} className="absolute inset-0 w-full h-full object-cover" loading="eager" fetchPriority="high" />
              <span
                className="absolute top-5 left-5"
                style={{ backgroundColor: featured.categoryColor, color: "#fff", fontSize: "10px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", padding: "8px 14px", borderRadius: "20px", fontFamily: "var(--font-body)" }}
              >
                {t.actueelFeaturedBadge}
              </span>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center gap-5">
              <div className="flex items-center gap-3">
                <span style={{ fontSize: "10.5px", fontWeight: 600, letterSpacing: "2.2px", textTransform: "uppercase", color: featured.categoryColor, fontFamily: "var(--font-body)" }}>
                  {bi(featured.categoryLabel, lang)}
                </span>
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#C9C3B9" }} />
                <span style={{ fontSize: "13px", color: "#8A958E", fontFamily: "var(--font-body)" }}>{bi(featured.date, lang)}</span>
              </div>
              <h2 style={{ margin: 0, color: "var(--foreground)", fontSize: "clamp(1.6rem, 2.6vw, 2rem)", lineHeight: 1.15, fontWeight: 700, letterSpacing: "-0.02em", fontFamily: "var(--font-body)" }}>
                {bi(featured.title, lang)}
              </h2>
              <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.75, fontWeight: 300, color: "#5B6B62", fontFamily: "var(--font-body)" }}>
                {bi(featured.excerpt, lang)}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: featured.categoryColor, fontFamily: "var(--font-body)" }}>
                {t.actueelReadFeatured} <ArrowRight size={15} />
              </span>
            </div>
          </a>
        </section>
      )}

      {rest.length > 0 && (
        <>
          <section className="max-w-[1180px] mx-auto px-6 lg:px-10 pt-10 pb-5 flex items-baseline gap-4">
            <h2 style={{ margin: 0, fontSize: "15px", fontWeight: 600, color: "var(--foreground)", fontFamily: "var(--font-body)" }}>{t.actueelPreviousLabel}</h2>
            <span className="flex-1 h-px" style={{ backgroundColor: "rgba(44,85,69,0.12)" }} />
            <span style={{ fontSize: "12.5px", fontWeight: 400, color: "#8A958E", fontFamily: "var(--font-body)" }}>
              {rest.length} {lang === "nl" ? "items" : "items"}
            </span>
          </section>

          <section className="max-w-[1180px] mx-auto px-6 lg:px-10 pb-24">
            <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(268px, 1fr))" }}>
              {rest.map((post) => (
                <ActueelCard key={post.slug} post={post} lang={lang} readMoreLabel={t.actueelReadMore} />
              ))}
            </div>
          </section>
        </>
      )}

      <section className="w-full py-16 lg:py-20" style={{ backgroundColor: "var(--foreground)" }}>
        <div className="max-w-[1180px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <p style={{ margin: 0, color: "rgba(255,248,240,0.85)", fontFamily: "var(--font-body)", fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)", fontWeight: 600, lineHeight: 1.3 }}>
            {t.homeCTAText}
          </p>
          <a
            href={routes.contact}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:opacity-90 hover:shadow-lg flex-shrink-0"
            style={{ backgroundColor: "var(--primary)", color: "white", fontFamily: "var(--font-body)" }}
          >
            {t.homeCTABtn} <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  )
}
