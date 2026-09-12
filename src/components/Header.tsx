"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { translations, type Lang } from "@/i18n/translations"
import { useLang } from "@/i18n/LangProvider"
import { routes } from "@/lib/routes"

const logoMoveri = "/images/logo-moveri.webp"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, setLang } = useLang()
  const pathname = usePathname()
  const t = translations[lang]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a href={routes.home} className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg" aria-label="Moveri – Home">
            <img src={logoMoveri} alt="Moveri Talent & Performance" className="h-11 w-auto" width={480} height={192} />
          </a>

          <nav className="hidden lg:flex items-center gap-1 h-full" aria-label="Hoofdnavigatie">
            {t.nav.map((item) => (
              <a
                key={item.id}
                href={routes[item.id]}
                className={`text-base font-medium transition-colors relative px-3.5 py-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  pathname === routes[item.id]
                    ? "text-primary after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-foreground/65 hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center bg-muted rounded-full p-1 gap-0.5" role="group" aria-label="Taal / Language">
              {(["nl", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`px-4 py-2 text-sm font-bold rounded-full transition-all uppercase tracking-wider ${
                    lang === l ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <div className="flex items-center bg-muted rounded-full p-1 gap-0.5">
              {(["nl", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3.5 py-2 text-sm font-bold rounded-full transition-all uppercase ${
                    lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 text-foreground hover:text-primary transition-colors rounded-lg"
              aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border" role="navigation" aria-label="Mobiele navigatie">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-0.5">
            {t.nav.map((item) => (
              <a
                key={item.id}
                href={routes[item.id]}
                className={`text-left w-full py-3.5 px-4 rounded-xl text-base font-medium transition-colors ${
                  pathname === routes[item.id] ? "bg-accent text-primary font-semibold" : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
