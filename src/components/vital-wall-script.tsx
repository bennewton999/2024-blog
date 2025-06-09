'use client';

import Script from 'next/script';

interface VitalWall {
  init(config: { wallId: string; apiKey: string; debug?: boolean }): void;
}

declare global {
  interface Window {
    VitalWall?: VitalWall;
  }
}

export function VitalWallScript() {
  return (
    <Script
      src="https://unpkg.com/@vitalwall/client@latest/dist/index.umd.js"
      strategy="lazyOnload"
      onLoad={() => {
        // Add a small delay to ensure the script is fully loaded
        setTimeout(() => {
          console.log('VitalWall available:', !!window.VitalWall);
          if (window.VitalWall) {
            console.log('Initializing VitalWall...');
            window.VitalWall.init({
              wallId: '65c1116c-640a-4588-9d40-d05b558679e4',
              apiKey: 'ac937a3d1b099478e870f4c4b8a60e19',
              debug: true
            });
          } else {
            console.error('VitalWall is not available on window object');
          }
        }, 100);
      }}
      onError={e => {
        console.error('Failed to load VitalWall script:', e);
      }}
    />
  );
}
