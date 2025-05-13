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
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [url, height, resolvedTheme]);

  return <div ref={containerRef} className="x-embed-container" />;
}
