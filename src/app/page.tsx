'use client';

import { allPosts } from 'contentlayer/generated';
import { BlogCard } from '@/components/blog/blog-card';
import { VitalWallEmbed } from '@/components/vital-wall-embed';
import { WebsiteJsonLd, PersonJsonLd } from '@/components/json-ld';
import { useState, lazy, Suspense, useEffect } from 'react';

// Dynamically import the AsteroidsGame component
const AsteroidsGame = lazy(() => import('@/components/asteroids-game').then(module => ({ default: module.AsteroidsGame })));

export default function Home() {
  const [gameKey, setGameKey] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [gameLoaded, setGameLoaded] = useState(false);
  const [shouldStartGame, setShouldStartGame] = useState(false);
  const posts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const resetGame = () => {
    // Reset all destroyed elements
    document.querySelectorAll('[style*="opacity: 0"], [style*="scale(0)"]').forEach((element) => {
      (element as HTMLElement).style.opacity = '';
      (element as HTMLElement).style.transform = '';
      (element as HTMLElement).style.pointerEvents = '';
      (element as HTMLElement).style.transition = '';
    });
    
    // Force re-render of the game component
    setGameKey((prev) => prev + 1);
    
    // Optionally unload the game component to save memory
    // setGameLoaded(false);
  };

  const handleGameStateChange = (gameActive: boolean) => {
    setIsGameActive(gameActive);
  };

  // Listen for Cmd+A to trigger game loading and activation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.code === 'KeyA') {
        e.preventDefault();
        e.stopPropagation();
        if (!gameLoaded) {
          // First time: load the game and mark it to start
          setGameLoaded(true);
          setShouldStartGame(true);
        }
        // If already loaded, let the game component handle it
      }
    };

    // Only listen if game is not loaded yet
    if (!gameLoaded) {
      window.addEventListener('keydown', handleKeyDown, { capture: true });
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
    };
  }, [gameLoaded]);

  return (
    <div className="container py-6 lg:py-10">
      <WebsiteJsonLd />
      <PersonJsonLd />
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl pb-16">
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-background via-background to-muted/20 p-8 lg:p-12 shadow-2xl shadow-black/10 backdrop-blur-sm dark:shadow-black/30 group">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none animate-pulse" />
          
          {/* Asteroids-style floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Diagonal movers */}
            <div className="absolute w-16 h-16 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-sm animate-asteroid-1" />
            <div className="absolute w-10 h-10 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-sm animate-asteroid-2" />
            <div className="absolute w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-sm animate-asteroid-3" />
            <div className="absolute w-8 h-8 bg-gradient-to-br from-accent/25 to-primary/25 rounded-full blur-sm animate-asteroid-4" />
            
            {/* Vertical and horizontal movers */}
            <div className="absolute w-14 h-14 bg-gradient-to-br from-primary/12 to-accent/12 rounded-full blur-sm animate-asteroid-5" />
            <div className="absolute w-6 h-6 bg-gradient-to-br from-accent/18 to-primary/18 rounded-full blur-sm animate-asteroid-6" />
          </div>
          
          {/* Hero Content - Hidden when game is active */}
          <div className={`relative flex flex-col items-center justify-between gap-10 pb-6 text-center transition-opacity duration-500 ${isGameActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for new opportunities
            </div>
            
            <div className="space-y-6">
              <h1 className="font-heading text-5xl font-bold tracking-tight lg:text-7xl xl:text-8xl bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent animate-fade-in">
                Ben Newton
              </h1>
              <p className="text-2xl lg:text-3xl text-muted-foreground font-medium bg-gradient-to-r from-muted-foreground to-muted-foreground/80 bg-clip-text text-transparent">
                Frontend Architect and Engineering Leader
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground/80">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-medium">Based in Orlando, FL</span>
                <span className="text-muted-foreground/40 mx-2">•</span>
                <span className="text-sm font-medium">20+ Years Experience</span>
              </div>
            </div>
            
            {/* Enhanced divider with animation */}
            <div className="flex items-center gap-4 w-full max-w-lg">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent animate-spin" style={{animationDuration: '8s'}} />
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
            
            <div className="max-w-4xl space-y-8 text-center">
              <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground">
                With over two decades of experience building web applications
                and leading engineering teams, I specialize in creating elegant,
                high-performance frontend solutions using React, TypeScript, and
                modern web technologies.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-muted-foreground/80">
                Currently focused on architectural patterns, developer
                experience, and building accessible applications that scale.
              </p>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Learn More About Me
                </a>
                <a
                  href="mailto:benenewton@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-background hover:bg-muted/50 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
          {/* Asteroids Game Easter Egg - Loaded on demand */}
          {gameLoaded && (
            <Suspense fallback={null}>
              <AsteroidsGame 
                key={gameKey} 
                onReset={resetGame} 
                onGameStateChange={handleGameStateChange}
                autoStart={shouldStartGame}
                onAutoStartComplete={() => setShouldStartGame(false)}
              />
            </Suspense>
          )}
        </div>
        <VitalWallEmbed />
      </section>
      {/* Section divider */}
      <div className="my-16 flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="text-sm font-medium text-muted-foreground px-3">Latest Articles</div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      
      {posts.length ? (
        <div className="grid gap-8 sm:grid-cols-2 animate-fade-in">
          {posts.map(post => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-12">No posts published.</p>
      )}
    </div>
  );
}
