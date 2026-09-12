import type { MetadataRoute } from "next"
import { actueelPosts } from "@/lib/actueelPosts"
import { actueelPostRoute } from "@/lib/routes"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://moveri.eu"
  return [
    { url: `${base}/` },
    { url: `${base}/diensten/` },
    { url: `${base}/actueel/` },
    ...actueelPosts.map((post) => ({ url: `${base}${actueelPostRoute(post.slug)}` })),
    { url: `${base}/over/` },
    { url: `${base}/contact/` },
    { url: `${base}/privacyverklaring/` },
    { url: `${base}/algemene-voorwaarden/` },
  ]
}
