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
          wallId: '65c1116c-640a-4588-9d40-d05b558679e4',
          apiKey: 'ac937a3d1b099478e870f4c4b8a60e19',
          domain: 'benenewton.com',
          debug: true
        });
      }}
    />
  )
} 