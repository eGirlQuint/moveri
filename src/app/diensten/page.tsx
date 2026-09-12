import type { Metadata } from "next"
import { DienstenPage } from "@/views/DienstenPage"

export const metadata: Metadata = {
  title: "Diensten",
  description: "Begeleiding, educatie en expertise voor mensen, teams en organisaties die willen ontwikkelen, presteren en duurzaam veranderen.",
  alternates: { canonical: "/diensten/" },
  openGraph: {
    title: "Diensten - Moveri",
    description: "Begeleiding, educatie en expertise voor mensen, teams en organisaties die willen ontwikkelen, presteren en duurzaam veranderen.",
    url: "/diensten/",
  },
}

export default function Page() {
  return <DienstenPage />
}
