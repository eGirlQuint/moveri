import type { Metadata } from "next"
import { TermsPage } from "@/views/TermsPage"

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "Duidelijke afspraken voor sporters, ouders, coaches en organisaties over begeleiding en andere diensten van Moveri.",
  alternates: { canonical: "/algemene-voorwaarden/" },
}

export default function Page() {
  return <TermsPage />
}
