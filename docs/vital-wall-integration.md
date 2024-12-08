# Adding VitalWall to Next.js

This guide explains how we integrated VitalWall analytics into our Next.js application.

## Implementation Steps

1. Created a client-side component for the VitalWall script:

```typescript
// src/components/vital-wall-script.tsx
'use client';

interface VitalWall {
  init(config: { wallId: string; apiKey: string; endpoint: string }): void;
}

declare global {
  interface Window {
    VitalWall?: VitalWall;
  }
}

export function VitalWallScript() {
  return (
    <Script
      src="http://localhost:4200/vitalwall-client.js"
      strategy="lazyOnload"
      onLoad={() => {
        window.VitalWall?.init({
          wallId: 'your-wall-id',
          apiKey: 'your-api-key',
          endpoint: 'your-endpoint'
        });
      }}
    />
  );
}
```

2. Added the component to the root layout:

```typescript
// src/app/layout.tsx
import { VitalWallScript } from '@/components/vital-wall-script';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
        <VitalWallScript />
      </body>
    </html>
  );
}
```

## Key Features

- Uses Next.js `Script` component with `lazyOnload` strategy for optimal performance
- Properly typed with TypeScript interfaces
- Client-side only execution to avoid SSR conflicts
- Configurable endpoint for analytics data

## Configuration

Replace these values in `vital-wall-script.tsx`:

- `wallId`: Your VitalWall wall ID
- `apiKey`: Your VitalWall API key
- `endpoint`: Your analytics endpoint URL
