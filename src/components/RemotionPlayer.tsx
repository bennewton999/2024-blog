'use client';

import { useEffect, useState } from 'react';

interface RemotionPlayerProps {
  component: React.ComponentType;
  durationInFrames: number;
  compositionWidth: number;
  compositionHeight: number;
  fps?: number;
  autoPlay?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
}

export const RemotionPlayer = ({
  component: Component,
  durationInFrames,
  compositionWidth,
  compositionHeight,
  fps = 30,
  autoPlay = true,
  loop = true,
  controls = true,
  className = ''
}: RemotionPlayerProps) => {
  const [Player, setPlayer] = useState<any>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Dynamic import only on client side
    import('@remotion/player').then((mod) => {
      setPlayer(() => mod.Player);
    }).catch(console.error);
  }, []);

  if (!isMounted || !Player) {
    // Show a placeholder during SSR and loading
    return (
      <div 
        className={`bg-gray-100 rounded-lg flex items-center justify-center aspect-video ${className}`}
      >
        <div className="text-gray-500">Loading animation...</div>
      </div>
    );
  }

  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${className}`}>
      <Player
        component={Component}
        durationInFrames={durationInFrames}
        compositionWidth={compositionWidth}
        compositionHeight={compositionHeight}
        fps={fps}
        autoPlay={autoPlay}
        loop={loop}
        controls={controls}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  );
};