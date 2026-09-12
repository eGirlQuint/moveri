import type { Metadata } from "next"
import { OverPage } from "@/views/OverPage"

export const metadata: Metadata = {
  title: { absolute: "Over Moveri" },
  description: "Achter Moveri staat Irene Faber, sport- en prestatiepsycholoog i.o. Ontdek de visie, werkwijze en waarden van Moveri.",
  alternates: { canonical: "/over/" },
  openGraph: {
    title: "Over Moveri",
    description: "Achter Moveri staat Irene Faber, sport- en prestatiepsycholoog i.o. Ontdek de visie, werkwijze en waarden van Moveri.",
    url: "/over/",
  },
}

export default function Page() {
  return <OverPage />
}
