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
  // Create a placeholder for TwitterEmbed in MDX
  TwitterEmbed: ({ url }: { url: string }) => (
    <div className="twitter-embed-placeholder" data-twitter-url={url}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View tweet on Twitter
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
    // Use type assertion to bypass typing issues with MDX components
    // @ts-expect-error MDX component typing issues
    const MdxComponent = () => <Component components={components} />;

    return (
      <>
        <MdxComponent />
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
