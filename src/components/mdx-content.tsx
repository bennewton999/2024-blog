'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { TwitterComments } from './twitter-comments';
import React from 'react';

interface MDXContentProps {
  code: string;
  twitterThreadUrl?: string;
}

// MDX components without client components that access browser APIs
const components = {
  pre: ({ children, ...props }: { children: React.ReactNode }) => (
    <pre {...props} className="overflow-auto p-4">
      {children}
    </pre>
  ),
  code: ({ children, ...props }: { children: React.ReactNode }) => (
    <code
      {...props}
      className="bg-muted px-1.5 py-0.5 rounded-md text-sm font-medium"
    >
      {children}
    </code>
  ),
  // Create a placeholder for TwitterEmbed in MDX - simple static version to avoid React nesting issues
  TwitterEmbed: ({ url }: { url: string }) => (
    <div className="twitter-embed-placeholder" data-twitter-url={url}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View post on 𝕏
      </a>
    </div>
  )
};

export function MDXContent({ code, twitterThreadUrl }: MDXContentProps) {
  const Component = useMDXComponent(code);

  if (!Component) {
    return <div>Error loading content</div>;
  }
  try {
    return (
      <>
        {/* @ts-expect-error MDX component typing issues */}
        <Component components={components} />
        {twitterThreadUrl && (
          <TwitterComments twitterThreadUrl={twitterThreadUrl} />
        )}
      </>
    );
  } catch (error) {
    console.error('Error rendering MDX:', error);
    return <div>Error rendering content</div>;
  }
}
