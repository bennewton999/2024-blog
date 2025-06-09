'use client';

import Script from 'next/script';

interface VitalWall {
  init(config: {
    wallId: string;
    apiKey: string;
    debug?: boolean;
  }): void;
}

declare global {
  interface Window {
    VitalWall?: VitalWall;
  }
}

export function VitalWallScript() {
  return (
    <>
      {/* Try the ES module version first */}
      <Script
        src="https://unpkg.com/@vitalwall/client@latest/dist/index.esm.js"
        type="module"
        strategy="lazyOnload"
        onLoad={() => {
          window.VitalWall?.init({
            wallId: '65c1116c-640a-4588-9d40-d05b558679e4',
            apiKey: 'ac937a3d1b099478e870f4c4b8a60e19',
            debug: true
          });
        }}
        onError={() => {
          // Fallback to UMD version if ES module fails
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/@vitalwall/client@latest/dist/index.umd.js';
          script.onload = () => {
            window.VitalWall?.init({
              wallId: '65c1116c-640a-4588-9d40-d05b558679e4',
              apiKey: 'ac937a3d1b099478e870f4c4b8a60e19',
              debug: true
            });
          };
          document.head.appendChild(script);
        }}
      />
    </>
  );
}
