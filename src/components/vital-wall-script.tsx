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
              console.log('VitalWall instance created');
              
              await vitalWall.init({
                wallId: "65c1116c-640a-4588-9d40-d05b558679e4",
                apiKey: "ac937a3d1b099478e870f4c4b8a60e19",
              });
              
              console.log('VitalWall initialized successfully');
              
              // Add CSS to ensure proper styling and fix zero height issue
              const style = document.createElement('style');
              style.textContent = \`
                [data-vital-wall] {
                  width: 100% !important;
                  min-height: 400px !important;
                  display: block !important;
                  position: relative !important;
                }
                
                [data-vital-wall] * {
                  box-sizing: border-box !important;
                }
                
                [data-vital-wall] .vital-wall-item,
                [data-vital-wall] .wall-item,
                [data-vital-wall] [class*="item"],
                [data-vital-wall] > div {
                  height: auto !important;
                  min-height: 60px !important;
                  display: block !important;
                  margin-bottom: 8px !important;
                  padding: 12px !important;
                  border: 1px solid #e5e7eb !important;
                  border-radius: 8px !important;
                  background: white !important;
                }
                
                [data-vital-wall] iframe {
                  width: 100% !important;
                  height: auto !important;
                  min-height: 400px !important;
                  border: none !important;
                  display: block !important;
                }
                
                /* Dark mode support */
                @media (prefers-color-scheme: dark) {
                  [data-vital-wall] .vital-wall-item,
                  [data-vital-wall] .wall-item,
                  [data-vital-wall] [class*="item"],
                  [data-vital-wall] > div {
                    background: #1f2937 !important;
                    border-color: #374151 !important;
                    color: white !important;
                  }
                }
              \`;
              document.head.appendChild(style);
              
              // Check if the embed container exists
              const embedContainer = document.querySelector('[data-vital-wall="65c1116c-640a-4588-9d40-d05b558679e4"]');
              console.log('Embed container found:', !!embedContainer);
              if (embedContainer) {
                console.log('Container dimensions:', {
                  width: embedContainer.offsetWidth,
                  height: embedContainer.offsetHeight,
                  display: getComputedStyle(embedContainer).display
                });
              }
            } catch (error) {
              console.error('Failed to initialize VitalWall:', error);
            }
          })();
        `
      }}
    />
  );
}
