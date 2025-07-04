'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface Ship {
  x: number;
  y: number;
  angle: number;
  velocity: { x: number; y: number };
  thrust: boolean;
  invulnerable: number; // Frames of invulnerability after respawn
  exploding: boolean;
  explosionFrame: number;
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
  autoStart?: boolean;
  onAutoStartComplete?: () => void;
}

export function AsteroidsGame({ onReset, onGameStateChange, autoStart, onAutoStartComplete }: AsteroidsGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<number>();
  const keysRef = useRef<Set<string>>(new Set());
  const [isActive, setIsActive] = useState(false);
  const [gameState, setGameState] = useState<'inactive' | 'starting' | 'playing' | 'gameOver' | 'levelComplete'>('inactive');
  const [, setScore] = useState(0);
  const [, setSessionBest] = useState(0);
  const [personalBest, setPersonalBest] = useState(() => {
    // Load personal best from localStorage on component mount
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('asteroids-personal-best');
      if (saved) {
        try {
          const data = JSON.parse(saved);
          return data.score || 0;
        } catch {
          return 0;
        }
      }
    }
    return 0;
  });
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);
  const [newPersonalBest, setNewPersonalBest] = useState(false);
  
  // Game state refs for better performance
  const shipRef = useRef<Ship>({
    x: 400,
    y: 300,
    angle: 0,
    velocity: { x: 0, y: 0 },
    thrust: false,
    invulnerable: 0,
    exploding: false,
    explosionFrame: 0,
  });
  
  const bulletsRef = useRef<Bullet[]>([]);
  const asteroidsRef = useRef<Asteroid[]>([]);
  const destroyedElementsRef = useRef<Set<HTMLElement>>(new Set());
  const scoreRef = useRef<number>(0);
  const sessionBestRef = useRef<number>(0);
  const personalBestRef = useRef<number>(personalBest);
  const livesRef = useRef<number>(3);
  const levelRef = useRef<number>(1);
  const levelTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // LocalStorage utilities for high scores
  const savePersonalBest = useCallback((score: number, level: number) => {
    if (typeof window !== 'undefined') {
      const bestData = {
        score,
        level,
        date: new Date().toISOString(),
      };
      localStorage.setItem('asteroids-personal-best', JSON.stringify(bestData));
      personalBestRef.current = score;
      setPersonalBest(score);
    }
  }, []);

  const updateHighScores = useCallback((currentScore: number) => {
    // Update session best
    if (currentScore > sessionBestRef.current) {
      sessionBestRef.current = currentScore;
      setSessionBest(currentScore);
    }

    // Check for new personal best
    if (currentScore > personalBestRef.current) {
      savePersonalBest(currentScore, levelRef.current);
      setNewPersonalBest(true);
      return true; // New personal best achieved
    }
    
    return false;
  }, [savePersonalBest]);

  // Initialize asteroids with progressive difficulty
  const initializeAsteroids = useCallback((currentLevel: number = 1) => {
    const canvas = canvasRef.current;
    if (!canvas) return [];
    
    const asteroids: Asteroid[] = [];
    const width = canvas.width;
    const height = canvas.height;
    
    // Speed multiplier increases by 10% per level
    const speedMultiplier = 1 + (currentLevel - 1) * 0.1;

    // Create 6 large asteroids at random positions
    for (let i = 0; i < 6; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = (0.5 + Math.random() * 1.5) * 0.9 * speedMultiplier;
      
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
    
    // Draw score, session best, personal best, level, and lives (always visible during game)
    if (gameState !== 'inactive') {
      ctx.fillStyle = '#ffffff';
      ctx.font = '18px Audiowide, monospace';
      ctx.textAlign = 'left';
      ctx.fillText(`SCORE: ${scoreRef.current}`, 20, 30);
      ctx.fillText(`LEVEL: ${levelRef.current}`, 20, 55);
      
      // Session and personal bests
      ctx.font = '16px Audiowide, monospace';
      ctx.fillStyle = '#00ff00';
      ctx.fillText(`SESSION: ${sessionBestRef.current}`, 20, 80);
      ctx.fillStyle = '#ffff00';
      ctx.fillText(`PERSONAL: ${personalBestRef.current}`, 20, 100);
      
      ctx.fillStyle = '#ffffff';
      
      // Draw lives as ship icons
      ctx.textAlign = 'center';
      ctx.fillText('LIVES:', width / 2 - 60, 30);
      for (let i = 0; i < livesRef.current; i++) {
        ctx.save();
        ctx.translate(width / 2 - 20 + (i * 25), 25);
        ctx.scale(0.6, 0.6);
        ctx.strokeStyle = '#00ff00';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(10, 0);
        ctx.lineTo(-6, -5);
        ctx.lineTo(-3, 0);
        ctx.lineTo(-6, 5);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }
      
      ctx.textAlign = 'start';
    }

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
      
      // Show scoring values
      ctx.fillStyle = '#00ff00';
      ctx.font = '16px Audiowide, monospace';
      ctx.fillText('SCORING:', width / 2, height / 2 + 220);
      ctx.font = '14px Audiowide, monospace';
      ctx.fillStyle = '#ffffff';
      ctx.fillText('Large Asteroid: 20 pts', width / 2, height / 2 + 245);
      ctx.fillText('Medium Asteroid: 50 pts', width / 2, height / 2 + 265);
      ctx.fillText('Small Asteroid: 100 pts', width / 2, height / 2 + 285);
      
      ctx.textAlign = 'start';
      return;
    }
    
    // Show game over screen
    if (gameState === 'gameOver') {
      ctx.fillStyle = '#ff0000';
      ctx.textAlign = 'center';
      ctx.font = 'bold 72px Audiowide, monospace';
      ctx.fillText('GAME OVER', width / 2, height / 2 - 120);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = '36px Audiowide, monospace';
      ctx.fillText(`FINAL SCORE: ${scoreRef.current}`, width / 2, height / 2 - 70);
      
      // Show achievement status
      if (newPersonalBest) {
        ctx.fillStyle = '#ffff00';
        ctx.font = 'bold 32px Audiowide, monospace';
        ctx.fillText('🏆 NEW PERSONAL BEST! 🏆', width / 2, height / 2 - 25);
      } else if (scoreRef.current === sessionBestRef.current && scoreRef.current > 0) {
        ctx.fillStyle = '#00ff00';
        ctx.font = '28px Audiowide, monospace';
        ctx.fillText('NEW SESSION BEST!', width / 2, height / 2 - 25);
      }
      
      // Show comparison stats
      ctx.fillStyle = '#888888';
      ctx.font = '20px Audiowide, monospace';
      ctx.fillText(`Session Best: ${sessionBestRef.current}`, width / 2, height / 2 + 15);
      ctx.fillText(`Personal Best: ${personalBestRef.current}`, width / 2, height / 2 + 40);
      
      ctx.fillStyle = '#666666';
      ctx.font = '18px Audiowide, monospace';
      ctx.fillText('Press SPACE to play again', width / 2, height / 2 + 80);
      ctx.fillText('Press ESC to exit', width / 2, height / 2 + 105);
      
      ctx.textAlign = 'start';
      return;
    }
    
    // Show level complete screen
    if (gameState === 'levelComplete') {
      ctx.fillStyle = '#00ff00';
      ctx.textAlign = 'center';
      ctx.font = 'bold 48px Audiowide, monospace';
      ctx.fillText(`LEVEL ${levelRef.current} COMPLETE!`, width / 2, height / 2 - 80);
      
      ctx.fillStyle = '#ffff00';
      ctx.font = '32px Audiowide, monospace';
      ctx.fillText('WELL DONE!', width / 2, height / 2 - 30);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = '24px Audiowide, monospace';
      ctx.fillText(`NEXT: LEVEL ${levelRef.current + 1}`, width / 2, height / 2 + 20);
      ctx.fillText('Asteroids move faster!', width / 2, height / 2 + 50);
      
      ctx.fillStyle = '#888888';
      ctx.font = '20px Audiowide, monospace';
      ctx.fillText('Get ready...', width / 2, height / 2 + 100);
      
      ctx.fillStyle = '#666666';
      ctx.font = '16px Audiowide, monospace';
      ctx.fillText('Press ESC to exit', width / 2, height / 2 + 130);
      
      ctx.textAlign = 'start';
      return;
    }

    // Game playing state
    if (gameState !== 'playing') return;

    const keys = keysRef.current;
    const ship = shipRef.current;
    const bullets = bulletsRef.current;
    const asteroids = asteroidsRef.current;

    // Handle ship explosion animation
    if (ship.exploding) {
      ship.explosionFrame++;
      if (ship.explosionFrame > 30) { // Explosion lasts 30 frames
        ship.exploding = false;
        ship.explosionFrame = 0;
        
        // Check if game over
        if (livesRef.current <= 0) {
          updateHighScores(scoreRef.current);
          setGameState('gameOver');
          return;
        }
        
        // Respawn ship
        ship.x = width / 2;
        ship.y = height / 2;
        ship.velocity = { x: 0, y: 0 };
        ship.angle = 0;
        ship.invulnerable = 120; // 2 seconds of invulnerability
      }
    }

    // Update ship only if not exploding
    if (!ship.exploding) {
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
      
      // Update invulnerability
      if (ship.invulnerable > 0) {
        ship.invulnerable--;
      }
    }

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
          
          // Award points based on asteroid type (original Asteroids scoring)
          let points = 0;
          if (asteroid.type === 'large') {
            points = 20;
          } else if (asteroid.type === 'medium') {
            points = 50;
          } else {
            points = 100;
          }
          
          scoreRef.current += points;
          setScore(scoreRef.current);
          
          // Update high score if needed
          if (scoreRef.current > highScoreRef.current) {
            highScoreRef.current = scoreRef.current;
            setHighScore(highScoreRef.current);
          }
          
          // Split asteroid based on type
          if (asteroid.type === 'large') {
            // Split into 3 medium asteroids
            const speedMultiplier = 1 + (levelRef.current - 1) * 0.1;
            for (let k = 0; k < 3; k++) {
              const angle = (k * Math.PI * 2) / 3 + Math.random() * 0.5;
              const speed = (1 + Math.random() * 2) * 0.9 * speedMultiplier;
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
            const speedMultiplier = 1 + (levelRef.current - 1) * 0.1;
            for (let k = 0; k < 3; k++) {
              const angle = (k * Math.PI * 2) / 3 + Math.random() * 0.5;
              const speed = (1.5 + Math.random() * 2.5) * 0.9 * speedMultiplier;
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

    // Check ship-asteroid collision
    if (!ship.exploding && ship.invulnerable === 0) {
      for (const asteroid of asteroids) {
        const dx = ship.x - asteroid.x;
        const dy = ship.y - asteroid.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < asteroid.size + 10) { // Ship has radius of ~10
          // Ship hit!
          ship.exploding = true;
          ship.explosionFrame = 0;
          livesRef.current--;
          setLives(livesRef.current);
          break;
        }
      }
    }
    
    // Check if level is complete (all asteroids destroyed)
    if (asteroids.length === 0 && !ship.exploding) {
      setGameState('levelComplete');
      
      // Clear any existing timeout
      if (levelTimeoutRef.current) {
        clearTimeout(levelTimeoutRef.current);
      }
      
      // Start next level after delay
      levelTimeoutRef.current = setTimeout(() => {
        levelRef.current++;
        setLevel(levelRef.current);
        
        // Initialize next level
        asteroidsRef.current = initializeAsteroids(levelRef.current);
        
        // Reset ship position and state
        ship.x = width / 2;
        ship.y = height / 2;
        ship.velocity = { x: 0, y: 0 };
        ship.angle = 0;
        ship.invulnerable = 120;
        ship.exploding = false;
        ship.explosionFrame = 0;
        
        setGameState('playing');
        levelTimeoutRef.current = null;
      }, 3000); // Show level complete screen for 3 seconds
      
      return;
    }

    // Draw ship
    if (ship.exploding) {
      // Draw explosion
      ctx.strokeStyle = '#ff0000';
      ctx.lineWidth = 2;
      const explosionSize = ship.explosionFrame * 3;
      
      // Draw expanding debris
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const distance = explosionSize;
        ctx.beginPath();
        ctx.moveTo(
          ship.x + Math.cos(angle) * distance,
          ship.y + Math.sin(angle) * distance
        );
        ctx.lineTo(
          ship.x + Math.cos(angle) * (distance + 10),
          ship.y + Math.sin(angle) * (distance + 10)
        );
        ctx.stroke();
      }
    } else if (!ship.exploding) {
      // Draw normal ship (with invulnerability flicker)
      if (ship.invulnerable === 0 || ship.invulnerable % 8 < 4) {
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
      }
    }

    // Draw bullets
    ctx.fillStyle = '#ffffff';
    bullets.forEach((bullet) => {
      ctx.fillRect(bullet.x - 2, bullet.y - 2, 4, 4);
    });

    // Draw asteroids with classic Asteroids jagged polygon style
    asteroids.forEach((asteroid) => {
      // Set stroke width and color based on asteroid type (thinner for smaller)
      ctx.strokeStyle = '#ffffff'; // Classic white like original Asteroids
      if (asteroid.type === 'large') {
        ctx.lineWidth = 3;
      } else if (asteroid.type === 'medium') {
        ctx.lineWidth = 2;
      } else {
        ctx.lineWidth = 1;
      }
      
      // Create jagged polygon shape like classic Asteroids
      ctx.beginPath();
      const points = asteroid.type === 'large' ? 12 : asteroid.type === 'medium' ? 10 : 8;
      
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        // Create more irregular, jagged shape with varying radius
        const radiusVariation = 0.3 + Math.sin(angle * 5 + asteroid.x * 0.01) * 0.3;
        const radius = asteroid.size * (0.7 + radiusVariation);
        
        // Add some angular jitter for more irregular shapes
        const angleJitter = Math.sin(angle * 7 + asteroid.y * 0.01) * 0.2;
        const jitteredAngle = angle + angleJitter;
        
        const x = asteroid.x + Math.cos(jitteredAngle) * radius;
        const y = asteroid.y + Math.sin(jitteredAngle) * radius;
        
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
              invulnerable: 120,
              exploding: false,
              explosionFrame: 0,
            };
          }
          
          bulletsRef.current = [];
          asteroidsRef.current = initializeAsteroids(1);
          destroyedElementsRef.current = new Set();
          scoreRef.current = 0;
          setScore(0);
          livesRef.current = 3;
          setLives(3);
          levelRef.current = 1;
          setLevel(1);
          setNewPersonalBest(false);
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

      // Handle level complete inputs
      if (gameState === 'levelComplete') {
        if (e.code === 'Escape') {
          // Clear the level timeout to prevent automatic progression
          if (levelTimeoutRef.current) {
            clearTimeout(levelTimeoutRef.current);
            levelTimeoutRef.current = null;
          }
          setIsActive(false);
          setGameState('inactive');
          onReset();
        }
        return;
      }
      
      // Handle game over inputs
      if (gameState === 'gameOver') {
        if (e.code === 'Space') {
          // Restart game
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
                invulnerable: 120,
                exploding: false,
                explosionFrame: 0,
              };
            }
            
            bulletsRef.current = [];
            asteroidsRef.current = initializeAsteroids(1);
            destroyedElementsRef.current = new Set();
            scoreRef.current = 0;
            setScore(0);
            livesRef.current = 3;
            setLives(3);
            levelRef.current = 1;
            setLevel(1);
            setNewPersonalBest(false);
          }, 5000);
        } else if (e.code === 'Escape') {
          setIsActive(false);
          setGameState('inactive');
          onReset();
        }
        return;
      }
      
      if (!isActive || gameState !== 'playing') return;
      
      keysRef.current.add(e.code);
      
      // Shooting
      if (e.code === 'Space' && !shipRef.current.exploding) {
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

  // Handle auto-start when component is loaded for the first time
  useEffect(() => {
    if (autoStart && !isActive) {
      // Simulate the Cmd+A activation
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
            invulnerable: 120,
            exploding: false,
            explosionFrame: 0,
          };
        }
        
        bulletsRef.current = [];
        asteroidsRef.current = initializeAsteroids(1);
        destroyedElementsRef.current = new Set();
        scoreRef.current = 0;
        setScore(0);
        livesRef.current = 3;
        setLives(3);
        levelRef.current = 1;
        setLevel(1);
        setNewPersonalBest(false);
        
        // Notify parent that auto-start is complete
        onAutoStartComplete?.();
      }, 5000); // Show start screen for 5 seconds
    }
  }, [autoStart, isActive, onAutoStartComplete, initializeAsteroids]);

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
      if (levelTimeoutRef.current) {
        clearTimeout(levelTimeoutRef.current);
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