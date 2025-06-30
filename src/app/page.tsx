import { allPosts } from 'contentlayer/generated';
import { BlogCard } from '@/components/blog/blog-card';
import { VitalWallEmbed } from '@/components/vital-wall-embed';
import { WebsiteJsonLd, PersonJsonLd } from '@/components/json-ld';

export default function Home() {
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="container py-6 lg:py-10">
      <WebsiteJsonLd />
      <PersonJsonLd />
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-5xl pb-16">
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background via-background to-muted/20 p-8 shadow-xl shadow-black/5 backdrop-blur-sm dark:shadow-black/20">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          
          <div className="relative flex flex-col items-center justify-between gap-8 pb-6 text-center">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl font-bold tracking-tight lg:text-6xl bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Ben Newton
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Frontend Architect and Engineering Leader
              </p>
            </div>
            
            {/* Enhanced divider */}
            <div className="flex items-center gap-4 w-full max-w-md">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
            
            <div className="max-w-3xl space-y-6 text-center">
              <p className="text-lg leading-relaxed text-muted-foreground">
                With over two decades of experience building web applications
                and leading engineering teams, I specialize in creating elegant,
                high-performance frontend solutions using React, TypeScript, and
                modern web technologies.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground/80">
                Currently focused on architectural patterns, developer
                experience, and building accessible applications that scale.
              </p>
            </div>
          </div>
        </div>
        <VitalWallEmbed />
      </section>
      {/* Section divider */}
      <div className="my-16 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="text-sm font-medium text-muted-foreground px-3">Latest Articles</div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      
      {posts.length ? (
        <div className="grid gap-8 sm:grid-cols-2 animate-fade-in">
          {posts.map(post => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-12">No posts published.</p>
      )}
    </div>
  );
}
