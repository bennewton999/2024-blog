import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MDXContent } from '@/components/mdx-content';
import { Breadcrumb } from '@/components/breadcrumb';
import { BlogPostJsonLd } from '@/components/json-ld';
import { Metadata } from 'next';
import { TwitterScriptLoader } from '@/components/twitter-script-loader';
import { calculateReadingTime, formatReadingTime } from '@/lib/utils';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allPosts.map(post => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: PostPageProps): Promise<Metadata> {
  // Ensure params is properly awaited before accessing its properties
  const { slug } = await Promise.resolve(params);
  const post = allPosts.find(post => post.slug === slug);

  if (!post) {
    return {};
  }

  const { title, description, date, image, slug: postSlug } = post;
  const ogImage = image
    ? `https://benenewton.com${image}`
    : `https://benenewton.com/images/avatar.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      url: `https://benenewton.com/blog/${postSlug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    },
    alternates: {
      canonical: `https://benenewton.com/blog/${slug}`
    }
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = allPosts.find(post => post.slug === slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  const readingTime = calculateReadingTime(post.body.raw);
  const readingTimeText = formatReadingTime(readingTime);

  return (
    <article className="container max-w-3xl py-6 lg:py-12">
      <TwitterScriptLoader />
      <BlogPostJsonLd post={post} />
      <div
        data-vital-item={`
          <a href="https://benenewton.com/blog/${post.slug}" style="text-decoration:none;display:block;">
            <div style="position:relative;width:100%;border-radius:8px;overflow:hidden;margin-bottom:16px;">
              <img src="https://benenewton.com${post.image}" style="width:100%;height:100%;object-fit:cover;" />
              <div style="position:absolute;bottom:0;left:0;right:0;padding:16px;background:linear-gradient(transparent,rgba(0,0,0,0.8));color:white;">
                <h3 style="font-size:18px;font-weight:600;margin:0;">${post.title}</h3>
              </div>
            </div>
          </a>
        `}
        data-vital-auto="true"
        data-vital-html="true"
      />
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
          <span className="text-sm">{readingTimeText}</span>
          <span>•</span>
          <div className="flex items-center gap-2 flex-wrap">
            {post.tags?.map(tag => (
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
        <MDXContent
          code={post.body.code}
          // @ts-expect-error - Property may not exist on all posts
          twitterThreadUrl={post.twitterThreadUrl}
        />
      </div>
    </article>
  );
}
