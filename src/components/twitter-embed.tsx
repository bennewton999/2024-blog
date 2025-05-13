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
    const anchor = document.createElement('a');
    anchor.className = 'twitter-timeline';
    anchor.href = url;
    anchor.setAttribute(
      'data-theme',
      resolvedTheme === 'dark' ? 'dark' : 'light'
    );
    anchor.setAttribute('data-chrome', 'noheader nofooter noborders');
    anchor.setAttribute('data-height', height.toString());
    anchor.textContent = 'Loading comments...';

    // Append to container
    if (containerRef.current) {
      containerRef.current.appendChild(anchor);
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
