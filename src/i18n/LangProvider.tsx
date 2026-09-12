"use client"

import { createContext, useContext, useEffect, useLayoutEffect, useState, type ReactNode } from "react"
import type { Lang } from "./translations"

const STORAGE_KEY = "moveri-lang"

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

function resolvePreferredLang(): Lang {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === "nl" || stored === "en") return stored
  return navigator.language.toLowerCase().startsWith("nl") ? "nl" : "en"
}

const LangContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void } | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  // Always starts as "nl" — matching the server-rendered HTML exactly avoids a
  // hydration mismatch. The real preference is resolved and applied below,
  // before paint, once we're guaranteed to be running in the browser.
  const [lang, setLangState] = useState<Lang>("nl")

  // Runs before paint: matches the inline blocking script in layout.tsx, which
  // hides <html> up front when it predicts this will resolve to "en", so the
  // page never paints the server-rendered Dutch text before swapping to English.
  useIsomorphicLayoutEffect(() => {
    const resolved = resolvePreferredLang()
    setLangState((current) => (current === resolved ? current : resolved))
    document.documentElement.style.display = ""
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  function setLang(next: Lang) {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error("useLang must be used within LangProvider")
  return ctx
}
