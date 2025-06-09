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
              
              // Add CSS to ensure proper styling and fix ticker layout issues
              const style = document.createElement('style');
              style.textContent = \`
                [data-vital-wall] {
                  width: 100% !important;
                  min-height: 400px !important;
                  display: block !important;
                  position: relative !important;
                  overflow: visible !important;
                }
                
                /* Fix for VitalWall ticker layout */
                [data-vital-wall] .vital-wall-container {
                  height: auto !important;
                  min-height: 400px !important;
                  overflow: visible !important;
                }
                
                [data-vital-wall] .ticker-layout {
                  height: auto !important;
                  min-height: 400px !important;
                  overflow: visible !important;
                }
                
                [data-vital-wall] .ticker-viewport {
                  height: auto !important;
                  min-height: 400px !important;
                  overflow: visible !important;
                  position: static !important;
                }
                
                [data-vital-wall] .ticker-scroll {
                  height: auto !important;
                  min-height: 400px !important;
                  overflow: visible !important;
                  position: static !important;
                  transform: none !important;
                  animation: none !important;
                }
                
                [data-vital-wall] .wall-item {
                  height: auto !important;
                  min-height: 120px !important;
                  display: block !important;
                  visibility: visible !important;
                  opacity: 1 !important;
                  margin-bottom: 16px !important;
                  padding: 0 !important;
                  position: static !important;
                }
                
                [data-vital-wall] .wall-item img {
                  max-width: 100% !important;
                  height: auto !important;
                  display: block !important;
                }
                
                [data-vital-wall] .wall-item a {
                  display: block !important;
                  text-decoration: none !important;
                  color: inherit !important;
                }
                
                [data-vital-wall] * {
                  box-sizing: border-box !important;
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
