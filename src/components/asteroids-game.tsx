'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface Ship {
  x: number;
  y: number;
  angle: number;
  velocity: { x: number; y: number };
  thrust: boolean;
}

interface Bullet {
  x: number;
  y: number;
  velocity: { x: number; y: number };
  life: number;
}

interface Asteroid {
  x: number;
  y: number;
  velocity: { x: number; y: number };
  size: number;
  type: 'large' | 'medium' | 'small';
  element?: HTMLElement;
}

interface AsteroidsGameProps {
  onReset: () => void;
  onGameStateChange: (isGameActive: boolean) => void;
}

export function AsteroidsGame({ onReset, onGameStateChange }: AsteroidsGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<number>();
  const keysRef = useRef<Set<string>>(new Set());
  const [isActive, setIsActive] = useState(false);
  const [gameState, setGameState] = useState<'inactive' | 'starting' | 'playing'>('inactive');
  
  // Game state refs for better performance
  const shipRef = useRef<Ship>({
    x: 400,
    y: 300,
    angle: 0,
    velocity: { x: 0, y: 0 },
    thrust: false,
  });
  
  const bulletsRef = useRef<Bullet[]>([]);
  const asteroidsRef = useRef<Asteroid[]>([]);
  const destroyedElementsRef = useRef<Set<HTMLElement>>(new Set());

  // Initialize asteroids with 10 large asteroids
  const initializeAsteroids = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return [];
    
    const asteroids: Asteroid[] = [];
    const width = canvas.width;
    const height = canvas.height;

    // Create 6 large asteroids at random positions
    for (let i = 0; i < 6; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = (0.5 + Math.random() * 1.5) * 0.9; // Slow down by 10%
      
      asteroids.push({
        x: Math.random() * width,
        y: Math.random() * height,
        velocity: {
          x: Math.cos(angle) * speed,
          y: Math.sin(angle) * speed,
        },
        size: 50, // Large asteroid size
        type: 'large',
      });
    }

    return asteroids;
  }, []);

  // Game loop
  const gameLoop = useCallback(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    // Show start screen
    if (gameState === 'starting') {
      ctx.fillStyle = '#00ff00';
      ctx.textAlign = 'center';
      ctx.font = 'bold 72px Audiowide, monospace';
      ctx.fillText('ASTEROIDS', width / 2, height / 2 - 150);
      
      ctx.fillStyle = '#ffff00';
      ctx.font = 'bold 36px Audiowide, monospace';
      ctx.fillText('HERO DESTROYER', width / 2, height / 2 - 100);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = '28px Audiowide, monospace';
      ctx.fillText('CONTROLS:', width / 2, height / 2 - 40);
      ctx.font = '24px Audiowide, monospace';
      ctx.fillText('← → : Rotate Ship', width / 2, height / 2 - 10);
      ctx.fillText('↑ : Thrust', width / 2, height / 2 + 20);
      ctx.fillText('SPACE : Shoot', width / 2, height / 2 + 50);
      ctx.fillText('ESC : Exit Game', width / 2, height / 2 + 80);
      
      ctx.fillStyle = '#ff6600';
      ctx.font = 'bold 26px Audiowide, monospace';
      ctx.fillText('DESTROY ALL ASTEROIDS!', width / 2, height / 2 + 130);
      
      ctx.fillStyle = '#888888';
      ctx.font = '22px Audiowide, monospace';
      ctx.fillText('Game starting in 3...2...1...', width / 2, height / 2 + 170);
      
      ctx.textAlign = 'start';
      return;
    }

    // Game playing state
    if (gameState !== 'playing') return;

    const keys = keysRef.current;
    const ship = shipRef.current;
    const bullets = bulletsRef.current;
    const asteroids = asteroidsRef.current;

    // Update ship
    if (keys.has('ArrowLeft')) {
      ship.angle -= 0.15;
    }
    if (keys.has('ArrowRight')) {
      ship.angle += 0.15;
    }

    // Thrust
    if (keys.has('ArrowUp')) {
      const thrust = 0.3;
      ship.velocity.x += Math.cos(ship.angle) * thrust;
      ship.velocity.y += Math.sin(ship.angle) * thrust;
      ship.thrust = true;
    } else {
      ship.thrust = false;
    }

    // Apply friction
    ship.velocity.x *= 0.98;
    ship.velocity.y *= 0.98;

    // Update ship position
    ship.x += ship.velocity.x;
    ship.y += ship.velocity.y;

    // Wrap ship around screen
    if (ship.x < 0) ship.x = width;
    if (ship.x > width) ship.x = 0;
    if (ship.y < 0) ship.y = height;
    if (ship.y > height) ship.y = 0;

    // Update bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
      const bullet = bullets[i];
      bullet.x += bullet.velocity.x;
      bullet.y += bullet.velocity.y;
      bullet.life--;

      // Remove bullets that are off-screen or expired
      if (bullet.life <= 0 || bullet.x < 0 || bullet.x > width || bullet.y < 0 || bullet.y > height) {
        bullets.splice(i, 1);
      }
    }

    // Update asteroids
    asteroids.forEach((asteroid) => {
      asteroid.x += asteroid.velocity.x;
      asteroid.y += asteroid.velocity.y;

      // Wrap asteroids around screen
      if (asteroid.x < -asteroid.size) asteroid.x = width + asteroid.size;
      if (asteroid.x > width + asteroid.size) asteroid.x = -asteroid.size;
      if (asteroid.y < -asteroid.size) asteroid.y = height + asteroid.size;
      if (asteroid.y > height + asteroid.size) asteroid.y = -asteroid.size;
    });

    // Collision detection and asteroid splitting
    for (let i = bullets.length - 1; i >= 0; i--) {
      const bullet = bullets[i];
      
      for (let j = asteroids.length - 1; j >= 0; j--) {
        const asteroid = asteroids[j];
        const dx = bullet.x - asteroid.x;
        const dy = bullet.y - asteroid.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < asteroid.size) {
          // Remove bullet
          bullets.splice(i, 1);
          
          // Split asteroid based on type
          if (asteroid.type === 'large') {
            // Split into 3 medium asteroids
            for (let k = 0; k < 3; k++) {
              const angle = (k * Math.PI * 2) / 3 + Math.random() * 0.5;
              const speed = (1 + Math.random() * 2) * 0.9; // Slow down by 10%
              asteroids.push({
                x: asteroid.x,
                y: asteroid.y,
                velocity: {
                  x: Math.cos(angle) * speed,
                  y: Math.sin(angle) * speed,
                },
                size: 30,
                type: 'medium',
              });
            }
          } else if (asteroid.type === 'medium') {
            // Split into 3 small asteroids
            for (let k = 0; k < 3; k++) {
              const angle = (k * Math.PI * 2) / 3 + Math.random() * 0.5;
              const speed = (1.5 + Math.random() * 2.5) * 0.9; // Slow down by 10%
              asteroids.push({
                x: asteroid.x,
                y: asteroid.y,
                velocity: {
                  x: Math.cos(angle) * speed,
                  y: Math.sin(angle) * speed,
                },
                size: 15,
                type: 'small',
              });
            }
          }
          // Small asteroids just disappear (no splitting)
          
          // Hide the DOM element with explosion effect (if it exists)
          if (asteroid.element && !destroyedElementsRef.current.has(asteroid.element)) {
            asteroid.element.style.transform = 'scale(0)';
            asteroid.element.style.opacity = '0';
            asteroid.element.style.transition = 'all 0.3s ease-out';
            destroyedElementsRef.current.add(asteroid.element);
          }
          
          // Remove the hit asteroid
          asteroids.splice(j, 1);
          break;
        }
      }
    }

    // Draw ship
    ctx.save();
    ctx.translate(ship.x, ship.y);
    ctx.rotate(ship.angle);
    
    // Ship body
    ctx.strokeStyle = '#00ff00';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(20, 0);
    ctx.lineTo(-12, -10);
    ctx.lineTo(-6, 0);
    ctx.lineTo(-12, 10);
    ctx.closePath();
    ctx.stroke();

    // Thrust flame
    if (ship.thrust) {
      ctx.strokeStyle = '#ff4400';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-6, -3);
      ctx.lineTo(-18, 0);
      ctx.lineTo(-6, 3);
      ctx.stroke();
    }
    
    ctx.restore();

    // Draw bullets
    ctx.fillStyle = '#ffffff';
    bullets.forEach((bullet) => {
      ctx.fillRect(bullet.x - 2, bullet.y - 2, 4, 4);
    });

    // Draw asteroids with different colors for different sizes
    asteroids.forEach((asteroid) => {
      // Set color based on asteroid type
      if (asteroid.type === 'large') {
        ctx.strokeStyle = '#ff0000'; // Red for large
        ctx.lineWidth = 3;
      } else if (asteroid.type === 'medium') {
        ctx.strokeStyle = '#ff6600'; // Orange for medium
        ctx.lineWidth = 2;
      } else {
        ctx.strokeStyle = '#ffff00'; // Yellow for small
        ctx.lineWidth = 1;
      }
      
      // Draw asteroid outline
      ctx.beginPath();
      ctx.arc(asteroid.x, asteroid.y, asteroid.size, 0, Math.PI * 2);
      ctx.stroke();
      
      // Add jagged edges for more realistic asteroid look
      ctx.beginPath();
      const points = 8;
      for (let i = 0; i < points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const radius = asteroid.size * (0.8 + Math.sin(angle * 3) * 0.2);
        const x = asteroid.x + Math.cos(angle) * radius;
        const y = asteroid.y + Math.sin(angle) * radius;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();
    });

    gameLoopRef.current = requestAnimationFrame(gameLoop);
  }, [isActive, gameState]);

  // Keyboard event handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Activate game with Cmd+A (or Ctrl+A)
      if ((e.metaKey || e.ctrlKey) && e.code === 'KeyA') {
        e.preventDefault();
        e.stopPropagation();
        setIsActive(true);
        setGameState('starting');
        
        // Start countdown and transition to playing
        setTimeout(() => {
          setGameState('playing');
          
          // Initialize game state
          const canvas = canvasRef.current;
          if (canvas) {
            shipRef.current = {
              x: canvas.width / 2,
              y: canvas.height / 2,
              angle: 0,
              velocity: { x: 0, y: 0 },
              thrust: false,
            };
          }
          
          bulletsRef.current = [];
          asteroidsRef.current = initializeAsteroids();
          destroyedElementsRef.current = new Set();
        }, 5000); // Show start screen for 5 seconds
        
        return;
      }

      // If game is active, prevent all default behaviors for game keys
      if (isActive) {
        const gameKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space', 'Escape'];
        if (gameKeys.includes(e.code)) {
          e.preventDefault();
          e.stopPropagation();
        }
      }

      if (!isActive || gameState !== 'playing') return;
      
      keysRef.current.add(e.code);
      
      // Shooting
      if (e.code === 'Space') {
        const ship = shipRef.current;
        const newBullet: Bullet = {
          x: ship.x + Math.cos(ship.angle) * 20,
          y: ship.y + Math.sin(ship.angle) * 20,
          velocity: {
            x: Math.cos(ship.angle) * 10 + ship.velocity.x,
            y: Math.sin(ship.angle) * 10 + ship.velocity.y,
          },
          life: 120,
        };
        
        bulletsRef.current.push(newBullet);
      }
      
      // Reset game
      if (e.code === 'Escape') {
        setIsActive(false);
        setGameState('inactive');
        onReset();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      // If game is active, prevent default behaviors for game keys
      if (isActive) {
        const gameKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space', 'Escape'];
        if (gameKeys.includes(e.code)) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
      
      keysRef.current.delete(e.code);
    };

    // Use capture phase to ensure we get events before other handlers
    window.addEventListener('keydown', handleKeyDown, { capture: true });
    window.addEventListener('keyup', handleKeyUp, { capture: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
      window.removeEventListener('keyup', handleKeyUp, { capture: true });
    };
  }, [isActive, gameState, onReset, initializeAsteroids]);

  // Notify parent of game state changes
  useEffect(() => {
    onGameStateChange(isActive);
  }, [isActive, onGameStateChange]);

  // Start/stop game loop
  useEffect(() => {
    if (isActive) {
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    } else {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    }

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [isActive, gameLoop]);

  // Setup canvas and focus management
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      // Re-center ship when canvas resizes
      if (isActive) {
        shipRef.current.x = canvas.width / 2;
        shipRef.current.y = canvas.height / 2;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Auto-focus canvas when game becomes active
    if (isActive) {
      setTimeout(() => {
        canvas.focus();
      }, 100);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isActive]);

  if (!isActive) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-50 focus:outline-none"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'normal'
      }}
      tabIndex={0}
      onFocus={() => {
        // Ensure canvas has focus when game is active
      }}
    />
  );
}