'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { calculateReadingTime, formatReadingTime } from '@/lib/utils';
import type { Post } from 'contentlayer/generated';

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  const date = new Date(post.date);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  const readingTime = calculateReadingTime(post.body.raw);
  const readingTimeText = formatReadingTime(readingTime);

  return (
    <div className="group relative">
      <Link href={post.url} className="absolute inset-0 z-10">
        <span className="sr-only">View Article</span>
      </Link>
      <Card className="overflow-hidden border border-border/50 bg-gradient-to-br from-background to-muted/10 shadow-lg shadow-black/5 transition-all duration-300 hover:shadow-xl hover:shadow-black/10 hover:scale-[1.02] hover:-translate-y-1 dark:shadow-black/20 dark:hover:shadow-black/30">
        {post.image && (
          <div className="aspect-[16/9] w-full overflow-hidden relative">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={450}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              priority
              unoptimized
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
        <CardContent className="p-6 space-y-3">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground/70">
            <time dateTime={post.date} className="font-medium">{formattedDate}</time>
            <span>•</span>
            <span className="font-medium">{readingTimeText}</span>
            <span>•</span>
            <div className="flex items-center gap-2 flex-wrap">
              {post.tags?.map(tag => (
                <Link
                  key={tag}
                  href={`/tags/${tag.toLowerCase()}`}
                  className="relative z-20"
                >
                  <Badge
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors border-primary/20 text-xs"
                  >
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
          <h2 className="font-heading text-xl font-bold group-hover:text-primary transition-colors duration-200">
            <span className="line-clamp-2 relative z-0 leading-tight">{post.title}</span>
          </h2>
          <p className="line-clamp-3 text-muted-foreground leading-relaxed text-sm">
            {post.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
