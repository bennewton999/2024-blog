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
          import VitalWall from 'https://unpkg.com/@vitalwall/client@latest';
          
          const vitalWall = new VitalWall();
          await vitalWall.init({
            wallId: "65c1116c-640a-4588-9d40-d05b558679e4",
            apiKey: "ac937a3d1b099478e870f4c4b8a60e19"
          });
        `
      }}
    />
  );
}
