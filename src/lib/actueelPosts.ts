import type { Lang } from "@/i18n/translations"
import postsData from "@/data/actueel-posts.json"

export type Bi = { nl: string; en: string }

export interface Segment {
  text: string
  href?: string
}

export type Block =
  | { kind: "p"; nl: Segment[]; en: Segment[] }
  | { kind: "heading"; nl: string; en: string }
  | { kind: "subheading"; nl: string; en: string }
  | { kind: "quote"; kicker: Bi; nl: string; en: string }
  | { kind: "images"; items: Array<{ src: string; alt: Bi }> }
  | { kind: "inlineImage"; src: string; alt: Bi }
  | { kind: "orderedList"; items: Array<{ title: Bi; text: Bi }> }
  | { kind: "termList"; items: string[] }
  | { kind: "tipsList"; items: Array<{ title: Bi; text: Bi }> }
  | { kind: "sources"; items: Array<{ citation: string; href?: string }> }
  | { kind: "credit"; nl: string; en: string }

export type Category = "workshop" | "onderzoek" | "blog"

// The JSON file is the source of truth for post content (text, translations
// and image paths). `categoryColor` is a presentation concern derived here
// from `category`, not duplicated in the data file.
export interface ActueelPostData {
  slug: string
  category: Category
  categoryLabel: Bi
  date: Bi
  meta: Bi
  author?: string
  title: Bi
  excerpt: Bi
  heroImage: { src: string; alt: Bi; objectPosition?: string; credit?: { label: string; href?: string } }
  body: Block[]
  credit?: Bi
}

export interface ActueelPost extends ActueelPostData {
  categoryColor: string
}

export const categoryColors: Record<Category, string> = {
  workshop: "var(--foreground)",
  onderzoek: "#B8916A",
  blog: "var(--primary)",
}

const rawPosts = postsData as ActueelPostData[]

export const actueelPosts: ActueelPost[] = rawPosts.map((post) => ({
  ...post,
  categoryColor: categoryColors[post.category],
}))

export function getActueelPost(slug: string): ActueelPost | undefined {
  return actueelPosts.find((p) => p.slug === slug)
}

export function bi(value: Bi, lang: Lang): string {
  return value[lang]
}
