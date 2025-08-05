import { allPosts } from 'contentlayer/generated';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL for your website
  const baseUrl = 'https://benenewton.com';

  // Create entries for all published blog posts
  const blogPosts = allPosts
    .filter(post => post.published === true || post.published === undefined)
    .map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'weekly' as const,
      priority: 0.8
    }));

  // Get unique tags from published posts only
  const allTags = new Set<string>();
  allPosts
    .filter(post => post.published === true || post.published === undefined)
    .forEach(post => {
      if (post.tags) {
        post.tags.forEach(tag => allTags.add(tag.toLowerCase()));
      }
    });

  // Create entries for all tag pages
  const tagPages = Array.from(allTags).map(tag => ({
    url: `${baseUrl}/tags/${tag}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6
  }));

  // Create entries for your static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7
    },
    {
      url: `${baseUrl}/now`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6
    },
    {
      url: `${baseUrl}/uses`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5
    }
  ];

  // Combine all entries
  return [...staticPages, ...blogPosts, ...tagPages];
}
