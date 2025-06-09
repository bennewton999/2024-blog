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
                
                /* More aggressive targeting for VitalWall items */
                [data-vital-wall] div,
                [data-vital-wall] article,
                [data-vital-wall] section,
                [data-vital-wall] .item,
                [data-vital-wall] .wall-item,
                [data-vital-wall] .vital-wall-item,
                [data-vital-wall] [class*="item"],
                [data-vital-wall] [data-item],
                [data-vital-wall] > * {
                  height: auto !important;
                  min-height: 80px !important;
                  display: block !important;
                  visibility: visible !important;
                  opacity: 1 !important;
                  margin-bottom: 12px !important;
                  padding: 16px !important;
                  border: 2px solid #3b82f6 !important;
                  border-radius: 8px !important;
                  background: #f8fafc !important;
                  line-height: 1.5 !important;
                  font-size: 14px !important;
                  color: #1f2937 !important;
                }
                
                [data-vital-wall] iframe {
                  width: 100% !important;
                  height: auto !important;
                  min-height: 400px !important;
                  border: none !important;
                  display: block !important;
                }
                
                /* Force visibility for any hidden elements */
                [data-vital-wall] [style*="display: none"],
                [data-vital-wall] [style*="height: 0"],
                [data-vital-wall] [style*="opacity: 0"] {
                  display: block !important;
                  height: auto !important;
                  min-height: 80px !important;
                  opacity: 1 !important;
                }
                
                /* Dark mode support */
                @media (prefers-color-scheme: dark) {
                  [data-vital-wall] div,
                  [data-vital-wall] article,
                  [data-vital-wall] section,
                  [data-vital-wall] .item,
                  [data-vital-wall] .wall-item,
                  [data-vital-wall] .vital-wall-item,
                  [data-vital-wall] [class*="item"],
                  [data-vital-wall] [data-item],
                  [data-vital-wall] > * {
                    background: #1e293b !important;
                    border-color: #3b82f6 !important;
                    color: white !important;
                  }
                }
              \`;
              document.head.appendChild(style);
              
              // Add debugging to inspect the actual DOM structure
              setTimeout(() => {
                const container = document.querySelector('[data-vital-wall="65c1116c-640a-4588-9d40-d05b558679e4"]');
                if (container) {
                  console.log('Container HTML:', container.innerHTML);
                  console.log('Container children:', container.children.length);
                  
                  // Log all child elements and their styles
                  Array.from(container.children).forEach((child, index) => {
                    const styles = getComputedStyle(child);
                    console.log(\`Child \${index}:\`, {
                      tagName: child.tagName,
                      className: child.className,
                      height: styles.height,
                      display: styles.display,
                      visibility: styles.visibility,
                      opacity: styles.opacity,
                      innerHTML: child.innerHTML.substring(0, 100)
                    });
                  });
                }
              }, 2000);
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
