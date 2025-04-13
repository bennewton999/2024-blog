import { Post } from 'contentlayer/generated';

interface BlogPostJsonLdProps {
  post: Post;
}

export function BlogPostJsonLd({ post }: BlogPostJsonLdProps) {
  const authorName = post.author?.name || 'Ben Newton';
  const authorUrl = 'https://benenewton.com/about';
  const publisherName = 'Ben Newton';
  const publisherLogo = 'https://benenewton.com/images/avatar.png';
  const postUrl = `https://benenewton.com/blog/${post.slug}`;
  const imageUrl = post.image
    ? `https://benenewton.com${post.image}`
    : 'https://benenewton.com/images/avatar.png';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl
    },
    publisher: {
      '@type': 'Person',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogo
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl
    },
    keywords: post.tags?.join(', ')
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface WebsiteJsonLdProps {
  url?: string;
  name?: string;
  description?: string;
}

export function WebsiteJsonLd({
  url = 'https://benenewton.com',
  name = 'Ben Newton | Frontend Architect & Engineering Leader',
  description = 'Frontend Architect and Engineering Leader sharing insights on web development, productivity, and technology.'
}: WebsiteJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url,
    name,
    description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface PersonJsonLdProps {
  url?: string;
  name?: string;
  jobTitle?: string;
  image?: string;
  sameAs?: string[];
}

export function PersonJsonLd({
  url = 'https://benenewton.com',
  name = 'Ben Newton',
  jobTitle = 'Frontend Architect & Engineering Leader',
  image = 'https://benenewton.com/images/avatar.png',
  sameAs = [
    'https://linkedin.com/in/bennewton',
    'https://github.com/bennewton999'
  ]
}: PersonJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    url,
    image,
    sameAs
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
