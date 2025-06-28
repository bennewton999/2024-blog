'use client';

import { TwitterEmbed } from './twitter-embed';

interface XCommentsProps {
  twitterThreadUrl?: string; // We keep the prop name for backward compatibility
}

export function TwitterComments({ twitterThreadUrl }: XCommentsProps) {
  if (!twitterThreadUrl) {
    return null;
  }

  return (
    <div className="border-t border-border mt-8 pt-6">
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <div className="flex flex-col space-y-4">
        <div>
          <p className="text-muted-foreground mb-2">
            💬 Have thoughts about this post? I would love to hear from you!
          </p>
          <p className="text-sm text-muted-foreground">
            Join the conversation by replying to the 𝕏 thread below:
          </p>
        </div>
        <a
          href={twitterThreadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 w-fit transition-colors"
          aria-label="Open discussion thread on X (formerly Twitter)"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Discuss on 𝕏
        </a>
        <div className="mt-4 rounded-lg bg-muted/30 dark:bg-background overflow-hidden">
          <TwitterEmbed url={twitterThreadUrl} />
        </div>
      </div>
    </div>
  );
}
