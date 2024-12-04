import { allPosts } from 'contentlayer/generated'
import { BlogCard } from '@/components/blog/blog-card'
import { notFound } from 'next/navigation'

interface TagPageProps {
  params: {
    tag: string
  }
}

export async function generateStaticParams() {
  const tags = new Set(allPosts.flatMap((post) => post.tags || []))
  return Array.from(tags).map((tag) => ({
    tag: tag.toLowerCase(),
  }))
}

export default function TagPage({ params }: TagPageProps) {
  const tag = decodeURIComponent(params.tag)
  const posts = allPosts.filter((post) => 
    post.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
  )

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="container py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Posts tagged &ldquo;{tag}&rdquo;
          </h1>
          <p className="text-xl text-muted-foreground">
            {posts.length} post{posts.length === 1 ? '' : 's'}
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {posts.length > 0 ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  )
} 