import type { PageId } from "@/i18n/translations"

export const routes: Record<PageId, string> = {
  home: "/",
  diensten: "/diensten/",
  actueel: "/actueel/",
  over: "/over/",
  contact: "/contact/",
}

export function actueelPostRoute(slug: string): string {
  return `${routes.actueel}${slug}/`
}

export const privacyRoute = "/privacyverklaring/"
export const termsRoute = "/algemene-voorwaarden/"
