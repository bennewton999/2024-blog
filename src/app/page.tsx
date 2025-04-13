import { allPosts } from 'contentlayer/generated';
import { BlogCard } from '@/components/blog/blog-card';
import { VitalWallEmbed } from '@/components/vital-wall-embed';

export default function Home() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="container py-6 lg:py-10">
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-5xl pb-12">
        <div className="rounded-lg border bg-card p-8 shadow">
          <div className="flex flex-col items-center justify-between gap-8 pb-6 text-center">
            <div className="space-y-2">
              <h1 className="font-heading text-4xl font-bold tracking-tight lg:text-6xl">
                Ben Newton
              </h1>
              <p className="text-xl text-muted-foreground">
                Frontend Architect and Engineering Leader
              </p>
            </div>
            <div className="w-24 border-t border-border" />
            <div className="max-w-3xl space-y-4 prose dark:prose-invert text-center">
              <p>
                With over two decades of experience building web applications
                and leading engineering teams, I specialize in creating elegant,
                high-performance frontend solutions using React, TypeScript, and
                modern web technologies.
              </p>
              <p>
                Currently focused on architectural patterns, developer
                experience, and building accessible applications that scale.
              </p>
            </div>
          </div>
        </div>
        <VitalWallEmbed />
      </section>
      <hr className="my-8" />
      {posts.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map(post => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  );
}
