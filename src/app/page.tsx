import type { Metadata } from "next"
import { HomePage } from "@/views/HomePage"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function Page() {
  return <HomePage />
}
