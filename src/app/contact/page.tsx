import type { Metadata } from "next"
import { ContactPage } from "@/views/ContactPage"

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met Moveri voor begeleiding, educatie of expertise op het gebied van talent en performance.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact - Moveri",
    description: "Neem contact op met Moveri voor begeleiding, educatie of expertise op het gebied van talent en performance.",
    url: "/contact/",
  },
}

export default function Page() {
  return <ContactPage />
}
