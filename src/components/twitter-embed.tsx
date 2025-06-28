'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

interface TwitterEmbedProps {
  url: string;
  height?: number;
}

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load?: (element?: HTMLElement) => void;
        createTweet?: (
          tweetId: string,
          element: HTMLElement,
          options?: Record<string, any>
        ) => Promise<void>;
      };
    };
  }
}

export function TwitterEmbed({ url, height = 400 }: TwitterEmbedProps) {
  const { resolvedTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    // Extract tweet ID from URL
    const tweetIdMatch = url.match(/status\/(\d+)/);
    const tweetId = tweetIdMatch ? tweetIdMatch[1] : null;

    if (!tweetId || !containerRef.current) {
      setError(true);
      setIsLoading(false);
      return;
    }

    // Clear previous content
    containerRef.current.innerHTML = '';

    const loadTweet = async () => {
      try {
        // Load Twitter widgets script
        if (!window.twttr?.widgets) {
          await new Promise<void>((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://platform.twitter.com/widgets.js';
            script.async = true;
            script.charset = 'utf-8';
            script.onload = () => resolve();
            script.onerror = () => reject(new Error('Failed to load Twitter script'));
            
            // Check if script already exists
            const existingScript = document.querySelector(
              'script[src="https://platform.twitter.com/widgets.js"]'
            );
            
            if (existingScript) {
              existingScript.remove();
            }
            
            document.body.appendChild(script);
          });
        }

        // Wait for twttr to be available
        let attempts = 0;
        while (!window.twttr?.widgets?.createTweet && attempts < 20) {
          await new Promise(resolve => setTimeout(resolve, 100));
          attempts++;
        }

        if (window.twttr?.widgets?.createTweet && containerRef.current) {
          await window.twttr.widgets.createTweet(
            tweetId,
            containerRef.current,
            {
              theme: resolvedTheme === 'dark' ? 'dark' : 'light',
              dnt: true,
              width: 550,
              align: 'center'
            }
          );
          setIsLoading(false);
        } else {
          throw new Error('Twitter widgets not available');
        }
      } catch (err) {
        console.error('Error loading tweet:', err);
        setError(true);
        setIsLoading(false);
        
        // Fallback: show link to tweet
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div class="border rounded-lg p-4 text-center">
              <p class="mb-2">Unable to load embedded tweet.</p>
              <a href="${url}" target="_blank" rel="noopener noreferrer" 
                 class="text-primary hover:underline">
                View on 𝕏 →
              </a>
            </div>
          `;
        }
      }
    };

    loadTweet();
  }, [url, resolvedTheme]);

  return (
    <div className="x-embed-container relative">
      {isLoading && (
        <div className="flex items-center justify-center p-8 text-muted-foreground">
          <div className="text-center">
            <div className="animate-pulse mb-2">Loading tweet...</div>
          </div>
        </div>
      )}
      <div 
        ref={containerRef} 
        className="twitter-embed-wrapper [&>div]:rounded-lg [&_iframe]:rounded-lg" 
        style={{
          borderRadius: '0.5rem',
          overflow: 'hidden'
        }}
      />
    </div>
  );
}
