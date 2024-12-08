import { allPosts } from 'contentlayer/generated'
import { BlogCard } from '@/components/blog/blog-card'
import { VitalWallEmbed } from '@/components/vital-wall-embed'

export default function Home() {
  const posts = allPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="container py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Ben Newton
          </h1>
          <p className="text-xl text-muted-foreground">
            Frontend Architect and Engineering Leader sharing insights on web development, productivity, and technology.
          </p>
          <VitalWallEmbed />
        </div>
      </div>
      <hr className="my-8" />
      {posts.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  )
}
