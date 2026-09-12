import type { Metadata } from "next"
import { PrivacyPage } from "@/views/PrivacyPage"

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Hoe Moveri zorgvuldig omgaat met persoonsgegevens van bezoekers, cliënten, deelnemers en opdrachtgevers.",
  alternates: { canonical: "/privacyverklaring/" },
}

export default function Page() {
  return <PrivacyPage />
}
