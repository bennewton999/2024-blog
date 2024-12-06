import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MDXContent } from '@/components/mdx-content'
import { Breadcrumb } from '@/components/breadcrumb'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })

  return (
    <article className="container max-w-3xl py-6 lg:py-12">
      <Breadcrumb pageName={post.title} />
      <div className="space-y-4">
        <h1 className="inline-block font-heading text-4xl lg:text-5xl">
          {post.title}
        </h1>
        {post.image && (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={675}
              className="object-cover w-full h-full"
              priority
              unoptimized
            />
          </div>
        )}
        <div className="flex items-center space-x-2 text-muted-foreground">
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
      </div>
      <div className="prose dark:prose-invert max-w-none py-8">
        <MDXContent code={post.body.code} />
      </div>
    </article>
  )
} 