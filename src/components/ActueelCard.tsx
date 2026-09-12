import { ArrowRight } from "lucide-react"
import type { Lang } from "@/i18n/translations"
import { actueelPostRoute } from "@/lib/routes"
import { bi, type ActueelPost } from "@/lib/actueelPosts"

export function ActueelCard({ post, lang, readMoreLabel }: { post: ActueelPost; lang: Lang; readMoreLabel: string }) {
  return (
    <a
      href={actueelPostRoute(post.slug)}
      className="flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
      style={{ backgroundColor: "#fff", borderRadius: "16px", borderTop: `2px solid ${post.categoryColor}`, boxShadow: "0 1px 14px rgba(44,85,69,0.06)" }}
    >
      <div className="relative overflow-hidden" style={{ height: "190px", backgroundColor: "#E3DED6" }}>
        <img src={post.heroImage.src} alt={bi(post.heroImage.alt, lang)} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-6 pb-7 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2.5">
          <span style={{ fontSize: "9.5px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: post.categoryColor, fontFamily: "var(--font-body)" }}>
            {bi(post.categoryLabel, lang)}
          </span>
          <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#C9C3B9" }} />
          <span style={{ fontSize: "12px", color: "#8A958E", fontFamily: "var(--font-body)" }}>{bi(post.date, lang)}</span>
        </div>
        <h3 style={{ margin: 0, fontSize: "20px", lineHeight: 1.25, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--foreground)", fontFamily: "var(--font-body)" }}>
          {bi(post.title, lang)}
        </h3>
        <p style={{ margin: 0, fontSize: "13.5px", lineHeight: 1.65, fontWeight: 300, color: "#6B7B72", fontFamily: "var(--font-body)" }}>
          {bi(post.excerpt, lang)}
        </p>
        <span className="mt-auto pt-1.5 inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--primary)", fontFamily: "var(--font-body)" }}>
          {readMoreLabel} <ArrowRight size={14} />
        </span>
      </div>
    </a>
  )
}
