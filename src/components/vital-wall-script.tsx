'use client'

import Script from 'next/script'

interface VitalWall {
  init(config: { wallId: string; apiKey: string; domain: string; debug?: boolean }): void;
}

declare global {
  interface Window {
    VitalWall?: VitalWall;
  }
}

export function VitalWallScript() {
  return (
    <Script 
      src="https://vitalwall.com/vitalwall-client.js" 
      strategy="lazyOnload"
      onLoad={() => {
        window.VitalWall?.init({
          wallId: 'd79cec2f-5fd8-449c-9ef0-1324f3349844',
          apiKey: 'generated-api-key',
          domain: 'bennewton.com,www.bennewton.com',
          debug: false
        });
      }}
    />
  )
} 