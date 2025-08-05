import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { calculateReadingTime, formatReadingTime } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on commerce frontend development, AI-driven workflows, and developer productivity tools from a specialist with 30 years of experience.',
  alternates: {
    canonical: '/blog'
  }
};

export default function BlogPage() {
  const posts = allPosts
    .filter(post => post.slug !== undefined && (post.published === true || post.published === undefined))
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="container py-6 lg:py-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="inline-block font-heading text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Insights on commerce frontend development, AI-driven workflows, and developer productivity 
            from a specialist with nearly 30 years of experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => {
            const readingTime = calculateReadingTime(post.body.raw);
            const readingTimeText = formatReadingTime(readingTime);
            
            return (
              <article key={post.slug} className="group relative flex flex-col space-y-2">
                {post.image && (
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                
                <div className="flex flex-col space-y-2">
                  <h2 className="text-xl font-semibold leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  
                  {post.description && (
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {post.description}
                    </p>
                  )}
                  
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span>•</span>
                    <span>{readingTimeText}</span>
                  </div>
                  
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map(tag => (
                        <Link
                          key={tag}
                          href={`/tags/${tag.toLowerCase()}`}
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-secondary hover:text-secondary-foreground"
                        >
                          {tag}
                        </Link>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="text-xs text-muted-foreground">
                          +{post.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts found.</p>
          </div>
        )}
      </div>
    </div>
  );
}