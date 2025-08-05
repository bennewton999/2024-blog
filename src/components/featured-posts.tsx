import { allPosts } from 'contentlayer/generated';
import { BlogCard } from '@/components/blog/blog-card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function FeaturedPosts() {
  // Get featured posts first, then fall back to most recent posts
  const featuredPosts = allPosts
    .filter(post => (post.published === true || post.published === undefined) && post.featured === true)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // If we don't have enough featured posts, supplement with recent posts
  const recentPosts = allPosts
    .filter(post => (post.published === true || post.published === undefined) && !post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const displayPosts = [...featuredPosts, ...recentPosts].slice(0, 4);

  if (!displayPosts.length) {
    return null;
  }

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold">
            Featured Articles
          </h2>
          <p className="text-lg text-muted-foreground">
            Insights on commerce development, AI workflows, and engineering leadership
          </p>
        </div>
        <Link
          href="/blog"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
        >
          <span>View All Articles</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {displayPosts.map((post, index) => (
          <div
            key={post._id}
            className={
              index === 0 && featuredPosts.length > 0
                ? 'md:col-span-2'
                : ''
            }
          >
            <BlogCard 
              post={post} 
              variant={index === 0 && featuredPosts.length > 0 ? 'featured' : 'default'}
            />
          </div>
        ))}
      </div>

      {/* Mobile view all link */}
      <div className="sm:hidden text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-medium transition-all duration-200 group"
        >
          <span>View All Articles</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}