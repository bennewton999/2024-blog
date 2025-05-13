'use client';

import dynamic from 'next/dynamic';

// Dynamically import the 𝕏 (formerly Twitter) script component with no SSR
const XScript = dynamic(
  () => import('@/components/twitter-script').then(mod => mod.TwitterEmbed),
  { ssr: false }
);

export function TwitterScriptLoader() {
  return <XScript />;
}
