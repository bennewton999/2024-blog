'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export function TwitterEmbed() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Set the theme for all 𝕏 (formerly Twitter) embeds
    document.querySelectorAll('.twitter-tweet').forEach(tweet => {
      tweet.setAttribute(
        'data-theme',
        resolvedTheme === 'dark' ? 'dark' : 'light'
      );
    });

    // Load 𝕏 widget script (still uses Twitter domain)
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';

    // Only add the script if it's not already loaded
    if (
      !document.querySelector(
        'script[src="https://platform.twitter.com/widgets.js"]'
      )
    ) {
      // Add a load handler to initialize widgets when the script loads
      script.onload = () => {
        // @ts-expect-error - Twitter's types aren't available
        if (window.twttr?.widgets) {
          // @ts-expect-error - Twitter's types aren't available
          window.twttr.widgets.load();
        }
      };
      document.body.appendChild(script);
    } else {
      // If the script is already loaded, try to manually load widgets
      // @ts-expect-error - Twitter's types aren't available
      if (window.twttr?.widgets) {
        // @ts-expect-error - Twitter's types aren't available
        window.twttr.widgets.load();
      }
    }

    return () => {
      // We don't remove the script on unmount as other embeds may be using it
    };
  }, [resolvedTheme]);

  // This component doesn't render anything visible, it just adds the script
  // and handles theme changes
  return null;
}
