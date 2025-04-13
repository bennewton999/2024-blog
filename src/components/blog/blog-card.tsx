'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Post {
  title: string;
  date: string;
  description: string;
  url: string;
  image?: string;
  tags?: string[];
}

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

  return (
    <div className="group relative">
      <Link href={post.url} className="absolute inset-0 z-10">
        <span className="sr-only">View Article</span>
      </Link>
      <Card className="overflow-hidden border hover:bg-accent/50 transition-colors">
        {post.image && (
          <div className="aspect-[16/9] w-full overflow-hidden">
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
        <CardContent className="p-4 space-y-2">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <time dateTime={post.date}>{formattedDate}</time>
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
                    className="hover:bg-secondary hover:text-secondary-foreground"
                  >
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
          <h2 className="font-heading text-2xl font-bold">
            <span className="line-clamp-1 relative z-0">{post.title}</span>
          </h2>
          <p className="line-clamp-2 text-muted-foreground">
            {post.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
