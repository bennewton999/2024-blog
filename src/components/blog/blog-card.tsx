'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { calculateReadingTime, formatReadingTime } from '@/lib/utils';
import type { Post } from 'contentlayer/generated';

interface BlogCardProps {
  post: Post;
  variant?: 'default' | 'featured';
}

export function BlogCard({ post, variant = 'default' }: BlogCardProps) {
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
      <Card className={`overflow-hidden border bg-gradient-to-br from-background to-muted/10 shadow-lg shadow-black/5 transition-all duration-300 hover:shadow-xl hover:shadow-black/10 hover:scale-[1.02] hover:-translate-y-1 dark:shadow-black/20 dark:hover:shadow-black/30 ${
        variant === 'featured' 
          ? 'border-primary/30 bg-gradient-to-br from-primary/5 to-background' 
          : 'border-border/50'
      }`}>
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
        <CardContent className={`space-y-4 ${variant === 'featured' ? 'p-8' : 'p-6'}`}>
          {/* Metadata row */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground/70 flex-wrap">
            <time dateTime={post.date} className="font-medium">{formattedDate}</time>
            <span>•</span>
            <span className="font-medium">{readingTimeText}</span>
          </div>
          
          {/* Tags row */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {post.tags.map(tag => (
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
          )}

          {/* Title */}
          <h2 className={`font-heading font-bold group-hover:text-primary transition-colors duration-200 ${
            variant === 'featured' ? 'text-2xl lg:text-3xl' : 'text-xl'
          }`}>
            <span className="line-clamp-2 relative z-0 leading-tight">{post.title}</span>
          </h2>
          
          {/* Description */}
          <p className={`text-muted-foreground leading-relaxed ${
            variant === 'featured' ? 'text-base line-clamp-4' : 'text-sm line-clamp-3'
          }`}>
            {post.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
