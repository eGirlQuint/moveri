"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Link2, Check } from "lucide-react"
import { translations } from "@/i18n/translations"
import { useLang } from "@/i18n/LangProvider"
import { routes } from "@/lib/routes"
import { ActueelCard } from "@/components/ActueelCard"
import { actueelPosts, bi, type ActueelPost, type Block, type Segment } from "@/lib/actueelPosts"

const bodyText = { color: "#3F5D51", fontSize: "16.5px", lineHeight: 1.8, fontWeight: 300, fontFamily: "var(--font-body)" }

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function headingSlugs(headingBlocks: Array<{ nl: string }>): string[] {
  const seen = new Map<string, number>()
  return headingBlocks.map((b) => {
    const base = slugify(b.nl)
    const count = seen.get(base) ?? 0
    seen.set(base, count + 1)
    return count === 0 ? base : `${base}-${count}`
  })
}

function Segments({ segments }: { segments: Segment[] }) {
  return (
    <>
      {segments.map((s, i) =>
        s.href ? (
          <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity" style={{ color: "var(--primary)", textDecorationColor: "rgba(204,85,200,0.4)" }}>
            {s.text}
          </a>
        ) : (
          <span key={i}>{s.text}</span>
        )
      )}
    </>
  )
}

function BlockRenderer({ block, lang, sourcesLabel, headingId }: { block: Block; lang: "nl" | "en"; sourcesLabel: string; headingId?: string }) {
  switch (block.kind) {
    case "p":
      return <p style={bodyText}><Segments segments={block[lang]} /></p>

    case "heading":
      return (
        <h3 id={headingId} style={{ margin: "8px 0 0", color: "var(--foreground)", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.01em", fontFamily: "var(--font-body)", scrollMarginTop: "106px" }}>
          {block[lang]}
        </h3>
      )

    case "subheading":
      return (
        <h4 id={headingId} style={{ margin: "0", color: "var(--primary)", fontSize: "1.05rem", fontWeight: 700, letterSpacing: "-0.005em", fontFamily: "var(--font-body)", scrollMarginTop: "106px" }}>
          {block[lang]}
        </h4>
      )

    case "quote":
      return (
        <aside style={{ padding: "32px 36px", backgroundColor: "var(--foreground)", borderRadius: "18px" }}>
          <p style={{ margin: "0 0 10px", fontSize: "10.5px", fontWeight: 600, letterSpacing: "2.4px", textTransform: "uppercase", color: "#E8A0E5", fontFamily: "var(--font-body)" }}>
            {block.kicker[lang]}
          </p>
          <p style={{ margin: 0, fontSize: "clamp(1.3rem, 2.2vw, 1.65rem)", lineHeight: 1.3, fontWeight: 500, letterSpacing: "-0.01em", color: "#F4F1EB", fontFamily: "var(--font-body)" }}>
            {block[lang]}
          </p>
        </aside>
      )

    case "images":
      return (
        <div className="grid grid-cols-2 gap-4">
          {block.items.map((img, i) => (
            <figure key={i} className="m-0 overflow-hidden rounded-2xl" style={{ backgroundColor: "#E3DED6", aspectRatio: "1/1" }}>
              <img src={img.src} alt={img.alt[lang]} className="w-full h-full object-cover block" loading="lazy" />
            </figure>
          ))}
        </div>
      )

    case "inlineImage":
      return (
        <div className="flex items-center gap-4">
          <img src={block.src} alt={block.alt[lang]} className="rounded-full object-cover flex-shrink-0" style={{ width: "72px", height: "72px" }} loading="lazy" />
          <p style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.6, fontStyle: "italic", color: "#6B7B72", fontFamily: "var(--font-body)" }}>{block.alt[lang]}</p>
        </div>
      )

    case "orderedList":
      return (
        <div className="flex flex-col">
          {block.items.map((item, i) => (
            <div key={i} className="flex gap-4" style={{ padding: "18px 0", borderTop: i === 0 ? "1px solid rgba(44,85,69,0.14)" : "none", borderBottom: "1px solid rgba(44,85,69,0.14)" }}>
              <span style={{ flexShrink: 0, width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "var(--primary)", color: "#fff", fontSize: "13px", fontWeight: 700, display: "grid", placeItems: "center", fontFamily: "var(--font-body)" }}>
                {i + 1}
              </span>
              <div>
                <p style={{ margin: "0 0 6px", fontWeight: 700, color: "var(--foreground)", fontSize: "15.5px", fontFamily: "var(--font-body)" }}>{item.title[lang]}</p>
                <p style={{ margin: 0, ...bodyText, fontSize: "15px" }}>{item.text[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      )

    case "numberedList":
      return (
        <ol className="flex flex-col gap-3" style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {block.items.map((item, i) => (
            <li key={i} className="flex items-center gap-4">
              <span style={{ flexShrink: 0, width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "var(--primary)", color: "#fff", fontSize: "13px", fontWeight: 700, display: "grid", placeItems: "center", fontFamily: "var(--font-body)" }}>
                {i + 1}
              </span>
              <span style={{ ...bodyText, fontSize: "15.5px", fontWeight: 500, color: "var(--foreground)" }}>{item[lang]}</span>
            </li>
          ))}
        </ol>
      )

    case "tipsList":
      return (
        <div className="flex flex-col gap-5">
          {block.items.map((item, i) => (
            <div key={i} className="flex gap-4">
              <span style={{ flexShrink: 0, fontSize: "1.4rem", fontWeight: 800, color: "var(--primary)", fontFamily: "var(--font-body)", lineHeight: 1.4 }}>{i + 1}</span>
              <div>
                <p style={{ margin: "0 0 4px", fontWeight: 700, color: "var(--foreground)", fontSize: "16px", fontFamily: "var(--font-body)" }}>{item.title[lang]}</p>
                <p style={{ margin: 0, ...bodyText, fontSize: "15px" }}>{item.text[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      )

    case "termList":
      return (
        <ol className="grid grid-cols-2 gap-x-6 gap-y-3" style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {block.items.map((term, i) => (
            <li key={i} className="flex items-center gap-3">
              <span style={{ flexShrink: 0, width: "24px", height: "24px", borderRadius: "50%", border: "1.5px solid var(--primary)", color: "var(--primary)", fontSize: "11px", fontWeight: 700, display: "grid", placeItems: "center", fontFamily: "var(--font-body)" }}>
                {i + 1}
              </span>
              <span style={{ fontStyle: "italic", color: "var(--foreground)", fontSize: "15px", fontFamily: "var(--font-body)" }}>{term}</span>
            </li>
          ))}
        </ol>
      )

    case "sources":
      return (
        <div>
          <p style={{ margin: "0 0 14px", fontWeight: 700, color: "var(--foreground)", fontSize: "13px", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "var(--font-body)" }}>
            {sourcesLabel}
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
            {block.items.map((s, i) => (
              <li key={i} style={{ fontSize: "13px", lineHeight: 1.6, color: "#8A958E", fontFamily: "var(--font-body)" }}>
                {s.href ? (
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity underline" style={{ color: "#8A958E", textDecorationColor: "rgba(138,149,142,0.4)" }}>
                    {s.citation}
                  </a>
                ) : (
                  s.citation
                )}
              </li>
            ))}
          </ul>
        </div>
      )

    case "credit":
      return <p style={{ margin: 0, fontSize: "12px", lineHeight: 1.7, fontWeight: 300, color: "#8A958E", fontFamily: "var(--font-body)" }}>{block[lang]}</p>

    default:
      return null
  }
}

function ShareBox({ shareLabel, copyLabel, copyDoneLabel }: { shareLabel: string; copyLabel: string; copyDoneLabel: string }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard API unavailable — nothing sensible to fall back to
    }
  }

  return (
    <div style={{ backgroundColor: "#fff", borderRadius: "16px", padding: "24px 26px", boxShadow: "0 1px 14px rgba(44,85,69,0.06)" }}>
      <p style={{ margin: "0 0 16px", fontSize: "10.5px", fontWeight: 600, letterSpacing: "2.2px", textTransform: "uppercase", color: "#8A958E", fontFamily: "var(--font-body)" }}>{shareLabel}</p>
      <div className="flex flex-col gap-2.5">
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center justify-between gap-2.5 w-full transition-colors hover:border-primary hover:text-primary"
          style={{ padding: "12px 16px", borderRadius: "11px", border: "1px solid rgba(44,85,69,0.16)", backgroundColor: "#FBFAF8", fontFamily: "inherit", fontSize: "13.5px", fontWeight: 500, color: "var(--foreground)", cursor: "pointer" }}
        >
          <span>{copied ? copyDoneLabel : copyLabel}</span>
          {copied ? <Check size={15} /> : <Link2 size={15} />}
        </button>
      </div>
    </div>
  )
}

export function ActueelDetailPage({ post }: { post: ActueelPost }) {
  const { lang } = useLang()
  const t = translations[lang]

  const related = actueelPosts.filter((p) => p.slug !== post.slug).slice(0, 3)
  const headingBlocks = post.body.filter((b) => b.kind === "heading" || b.kind === "subheading")
  const headingIds = headingSlugs(headingBlocks)

  return (
    <>
      <article className="max-w-[1180px] mx-auto px-6 lg:px-10 pt-11">
        <a href={routes.actueel} className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: "var(--primary)", fontFamily: "var(--font-body)" }}>
          <ArrowLeft size={15} /> {t.actueelBack}
        </a>

        <header className="max-w-[1060px] mt-9">
          <div className="flex flex-wrap items-center gap-3.5 mb-5">
            <span style={{ fontSize: "10.5px", fontWeight: 600, letterSpacing: "2.2px", textTransform: "uppercase", color: post.categoryColor, fontFamily: "var(--font-body)" }}>
              {bi(post.categoryLabel, lang)}
            </span>
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#C9C3B9" }} />
            <span style={{ fontSize: "13px", color: "#8A958E", fontFamily: "var(--font-body)" }}>{bi(post.date, lang)}</span>
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#C9C3B9" }} />
            <span style={{ fontSize: "13px", color: "#8A958E", fontFamily: "var(--font-body)" }}>{bi(post.meta, lang)}</span>
          </div>
          <h1 style={{ margin: "0 0 24px", color: "var(--foreground)", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-0.02em", fontFamily: "var(--font-body)" }}>
            {bi(post.title, lang)}
          </h1>
          <p style={{ margin: 0, fontSize: "19px", lineHeight: 1.65, fontWeight: 400, color: "#4E6B5F", fontFamily: "var(--font-body)" }}>
            {bi(post.excerpt, lang)}
          </p>
        </header>

        <figure className="m-0 mt-11 overflow-hidden rounded-[20px]" style={{ backgroundColor: "#E3DED6", aspectRatio: "16/9" }}>
          <img
            src={post.heroImage.src}
            alt={bi(post.heroImage.alt, lang)}
            className="w-full h-full block"
            style={{ objectFit: "cover", objectPosition: post.heroImage.objectPosition ?? "center" }}
            loading="eager"
          />
        </figure>
        {post.heroImage.credit && (
          <p className="mt-2 text-right" style={{ margin: "8px 0 0", fontSize: "11.5px", color: "#8A958E", fontFamily: "var(--font-body)" }}>
            {post.heroImage.credit.href ? (
              <a
                href={post.heroImage.credit.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline"
                style={{ color: "inherit", textDecorationColor: "rgba(138,149,142,0.4)" }}
              >
                {post.heroImage.credit.label}
              </a>
            ) : (
              post.heroImage.credit.label
            )}
          </p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_232px] gap-12 lg:gap-16 pt-12 lg:pt-14 items-start">
          <div className="max-w-[700px] flex flex-col gap-6">
            {(() => {
              let headingIndex = -1
              return post.body.map((block, i) => {
                const headingId = block.kind === "heading" || block.kind === "subheading" ? headingIds[++headingIndex] : undefined
                return <BlockRenderer key={i} block={block} lang={lang} sourcesLabel={t.actueelSources} headingId={headingId} />
              })
            })()}
            {post.credit && (
              <div className="mt-2 pt-5" style={{ borderTop: "1px solid rgba(44,85,69,0.14)" }}>
                <p style={{ margin: 0, fontSize: "12px", lineHeight: 1.7, fontWeight: 300, color: "#8A958E", fontFamily: "var(--font-body)" }}>{post.credit[lang]}</p>
              </div>
            )}
          </div>

          <aside className="flex flex-col gap-6 lg:sticky" style={{ top: "106px" }}>
            {headingBlocks.length > 0 && (
              <div className="px-1">
                <p style={{ margin: "0 0 14px", fontSize: "10.5px", fontWeight: 600, letterSpacing: "2.2px", textTransform: "uppercase", color: "#8A958E", fontFamily: "var(--font-body)" }}>
                  {t.actueelToc}
                </p>
                <div className="flex flex-col gap-2.5" style={{ borderLeft: "1px solid rgba(44,85,69,0.14)", paddingLeft: "16px" }}>
                  {headingBlocks.map((block, i) => {
                    const isSub = block.kind === "subheading"
                    const style = {
                      fontSize: isSub ? "12px" : "13px",
                      lineHeight: 1.5,
                      fontWeight: 300,
                      color: isSub ? "#8A958E" : "#5B6B62",
                      fontFamily: "var(--font-body)",
                      paddingLeft: isSub ? "14px" : 0,
                    }
                    return (
                      <a key={i} href={`#${headingIds[i]}`} className="hover:text-primary transition-colors" style={style}>
                        {block[lang]}
                      </a>
                    )
                  })}
                </div>
              </div>
            )}

            <ShareBox shareLabel={t.actueelShare} copyLabel={t.actueelCopyLink} copyDoneLabel={t.actueelCopyLinkDone} />
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="max-w-[1180px] mx-auto px-6 lg:px-10 mt-20 pb-24">
          <div className="flex items-baseline gap-4 mb-6">
            <h2 style={{ margin: 0, fontSize: "15px", fontWeight: 600, color: "var(--foreground)", fontFamily: "var(--font-body)" }}>{t.actueelMore}</h2>
            <span className="flex-1 h-px" style={{ backgroundColor: "rgba(44,85,69,0.12)" }} />
            <a href={routes.actueel} className="inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: "var(--primary)", fontFamily: "var(--font-body)" }}>
              {t.actueelViewAll} <ArrowRight size={14} />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <ActueelCard key={p.slug} post={p} lang={lang} readMoreLabel={t.actueelReadMore} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
