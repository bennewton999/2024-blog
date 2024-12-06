'use client'

import Link from 'next/link'
import Image from 'next/image'

interface Post {
  title: string
  date: string
  description: string
  url: string
  image?: string
  tags?: string[]
}

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  const date = new Date(post.date)
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })

  return (
    <div className="group relative flex flex-col space-y-2">
      {post.image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={450}
            className="object-cover w-full h-full"
            priority
            unoptimized
          />
        </div>
      )}
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <time dateTime={post.date}>{formattedDate}</time>
          <span>•</span>
          <div className="flex items-center gap-2 flex-wrap">
            {post.tags?.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag.toLowerCase()}`}
                className="relative z-10 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
        <h2 className="font-heading text-2xl font-bold">
          <Link href={post.url} className="line-clamp-1">
            {post.title}
          </Link>
        </h2>
        <p className="line-clamp-2 text-muted-foreground">{post.description}</p>
      </div>
      <Link href={post.url} className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </div>
  )
} 