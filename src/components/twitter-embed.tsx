'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

interface TwitterEmbedProps {
  url: string;
  height?: number;
}

export function TwitterEmbed({ url, height = 400 }: TwitterEmbedProps) {
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clear previous content
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    // Create 𝕏 (formerly Twitter) embed
    // Instead of creating a timeline (which might not work well),
    // let's create a tweet embed which is more reliable
    const blockquote = document.createElement('blockquote');
    blockquote.className = 'twitter-tweet';
    blockquote.setAttribute(
      'data-theme',
      resolvedTheme === 'dark' ? 'dark' : 'light'
    );

    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.textContent = 'Loading tweet...';

    blockquote.appendChild(anchor);

    // Append to container
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(blockquote);
    }

    // Load 𝕏 widget script (still uses Twitter domain)
    // Only add the script if it's not already loaded
    if (
      !document.querySelector(
        'script[src="https://platform.twitter.com/widgets.js"]'
      )
    ) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);
    } else {
      // If the script is already loaded, try to trigger widget creation
      // @ts-expect-error - Twitter's types aren't available
      if (window.twttr?.widgets) {
        // @ts-expect-error - Twitter's types aren't available
        window.twttr.widgets.load(containerRef.current);
      }
    }

    return () => {
      // We don't remove the script on unmount as other embeds may be using it
    };
  }, [url, height, resolvedTheme]);

  return <div ref={containerRef} className="x-embed-container" />;
}
