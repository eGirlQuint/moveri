import type { Metadata } from "next"
import { ActueelPage } from "@/views/ActueelPage"

export const metadata: Metadata = {
  title: "Actueel",
  description: "Blogs, nieuws en onderzoek van Moveri: verslagen van workshops en sessies, inzichten uit onderzoek en de mentale kant van presteren.",
  alternates: { canonical: "/actueel/" },
  openGraph: {
    title: "Actueel - Moveri",
    description: "Blogs, nieuws en onderzoek van Moveri: verslagen van workshops en sessies, inzichten uit onderzoek en de mentale kant van presteren.",
    url: "/actueel/",
  },
}

export default function Page() {
  return <ActueelPage />
}
