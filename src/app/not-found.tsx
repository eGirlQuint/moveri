import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { Blob } from "@/components/Blob"
import { DF } from "@/lib/style"

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-40 px-6">
      <Blob className="w-96 h-96 -top-28 -right-28 opacity-40" style={{ background: "var(--accent)", borderRadius: "40% 60% 40% 60% / 60% 40% 60% 40%" }} />
      <Blob className="w-64 h-64 -bottom-24 -left-24 opacity-30" style={{ background: "var(--muted)", borderRadius: "55% 45% 60% 40% / 40% 60% 40% 60%" }} />

      <div className="relative max-w-lg mx-auto text-center">
        <p className="text-primary font-extrabold text-xs tracking-[0.14em] uppercase mb-4">404</p>
        <h1 className="text-4xl lg:text-5xl text-foreground mb-5" style={DF}>Pagina niet gevonden</h1>
        <p className="text-foreground/65 leading-relaxed mb-1">Deze pagina bestaat niet (meer), of het adres klopt niet helemaal.</p>
        <p className="text-foreground/50 text-sm mb-10">This page could not be found.</p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:opacity-90 hover:shadow-lg"
          style={{ backgroundColor: "var(--primary)", color: "white", fontFamily: "var(--font-body)" }}
        >
          Terug naar home <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
