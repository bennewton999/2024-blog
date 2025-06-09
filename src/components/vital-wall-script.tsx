'use client';

import Script from 'next/script';

export function VitalWallScript() {
  return (
    <Script
      id="vital-wall-init"
      type="module"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          (async () => {
            try {
              const { default: VitalWall } = await import('https://unpkg.com/@vitalwall/client@latest/dist/index.esm.js');
              
              const vitalWall = new VitalWall();
              await vitalWall.init({
                wallId: "65c1116c-640a-4588-9d40-d05b558679e4",
                apiKey: "ac937a3d1b099478e870f4c4b8a60e19",
                domain: "benenewton.com",
              });
              console.log('VitalWall initialized successfully');
            } catch (error) {
              console.error('Failed to initialize VitalWall:', error);
            }
          })();
        `
      }}
    />
  );
}
