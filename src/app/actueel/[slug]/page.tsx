import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ActueelDetailPage } from "@/views/ActueelDetailPage"
import { actueelPosts, getActueelPost } from "@/lib/actueelPosts"
import { actueelPostRoute } from "@/lib/routes"

export function generateStaticParams() {
  return actueelPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getActueelPost(slug)
  if (!post) return {}

  const canonical = actueelPostRoute(slug)
  return {
    title: post.title.nl,
    description: post.excerpt.nl,
    alternates: { canonical },
    openGraph: {
      title: `${post.title.nl} - Moveri`,
      description: post.excerpt.nl,
      url: canonical,
      images: [{ url: post.heroImage.src }],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getActueelPost(slug)
  if (!post) notFound()

  return <ActueelDetailPage post={post} />
}
