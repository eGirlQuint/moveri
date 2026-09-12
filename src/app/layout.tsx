import type { Metadata } from "next"
import { LangProvider } from "@/i18n/LangProvider"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://moveri.eu"),
  title: {
    default: "Moveri - Talent & Performance",
    template: "%s - Moveri",
  },
  description: "Moveri helpt talent duurzaam versterken en ondersteunt optimaal presteren binnen én buiten de sport, met persoonlijke begeleiding, educatie en expertise.",
  icons: {
    icon: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    siteName: "Moveri",
    type: "website",
    locale: "nl_NL",
  },
  other: {
    "theme-color": "#CC55C8",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('moveri-lang');var l=(s==='nl'||s==='en')?s:(((navigator.language||'').toLowerCase().indexOf('nl')===0)?'nl':'en');if(l==='en'){document.documentElement.style.display='none';setTimeout(function(){document.documentElement.style.display=''},2000)}}catch(e){}})();`,
          }}
        />
        <LangProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  )
}
