# 🎮 Asteroids Easter Egg

Hidden within this personal blog site is a fully playable Asteroids game! This classic arcade game recreation features modern web technologies, progressive difficulty, and a personal achievement system.

## 🚀 How to Activate

Press **Cmd+A** (Mac) or **Ctrl+A** (Windows/Linux) anywhere on the homepage to launch the game!

## 🎯 Game Features

### Classic Asteroids Gameplay
- **Ship Controls**: Arrow keys to rotate, up arrow for thrust
- **Combat**: Spacebar to shoot asteroids
- **Physics**: Authentic momentum and screen wrapping
- **Splitting Mechanics**: Large → Medium → Small → Destroyed

### Progressive Difficulty System
- **Infinite Levels**: Each level increases asteroid speed by 10%
- **Level Progression**: Complete a level by destroying all asteroids
- **Level Splash Screens**: Celebrates completion and previews next challenge

### Lives & Game Over
- **3 Lives**: Lose a life when your ship collides with an asteroid
- **Ship Explosion**: Dramatic debris animation on collision
- **Invulnerability**: 2-second immunity after respawning (ship flickers)
- **Game Over**: Classic arcade-style screen with restart option

### Scoring System (Original 1979 Values)
- **Large Asteroid**: 20 points
- **Medium Asteroid**: 50 points  
- **Small Asteroid**: 100 points
- **Strategy**: Smaller asteroids = higher points (risk vs reward)

### High Score System
- **Session Best**: Highest score in current browser session
- **Personal Best**: All-time best stored in localStorage
- **Achievement Celebrations**: Special notifications for new records
- **Privacy-First**: All scores stored locally on your device

## 🎨 Visual Design

### Authentic Retro Aesthetics
- **Vector Graphics**: Classic wireframe asteroid shapes
- **Audiowide Font**: Retro-futuristic typography from Google Fonts
- **Color Scheme**: Green ship, white bullets, varied asteroid colors by size
- **HUD Display**: Live score, level, session best, personal best, and lives

### Performance Optimizations
- **Dynamic Loading**: Game code only loads when activated (saves ~15KB)
- **60fps Gameplay**: Smooth canvas-based rendering
- **Responsive Design**: Adapts to different screen sizes

## 🕹️ Controls Reference

| Control | Action |
|---------|--------|
| **Cmd+A / Ctrl+A** | Activate game |
| **← →** | Rotate ship |
| **↑** | Thrust forward |
| **Spacebar** | Fire bullets |
| **ESC** | Exit game |

## 🏆 Achievement System

### Score Tracking
- **Current Score**: Live score during gameplay
- **Session Best**: Resets when page is refreshed
- **Personal Best**: Persists across browser sessions
- **Level Achievement**: Tracks highest level reached

### Celebrations
- **🏆 NEW PERSONAL BEST!**: When you beat your all-time record
- **NEW SESSION BEST!**: When you beat your current session record
- **Level Complete**: Congratulations screen between levels

## 🛠️ Technical Implementation

### Modern Web Technologies
- **React 19**: Component-based architecture
- **TypeScript**: Type-safe game logic
- **HTML5 Canvas**: High-performance rendering
- **Next.js 15**: Server-side rendering and optimization

### Game Architecture
- **Component Structure**: Modular, reusable game components
- **State Management**: React hooks for game state
- **Event Handling**: Keyboard input with proper focus management
- **Collision Detection**: Precise circular collision algorithms

### Performance Features
- **Code Splitting**: Game loads only when activated
- **Memory Management**: Proper cleanup of timeouts and event listeners
- **Browser Storage**: Efficient localStorage usage for high scores

## 🎪 Easter Egg Philosophy

This easter egg embodies the spirit of classic web development - hiding delightful surprises for curious users who explore beyond the surface. It's a fully-featured game disguised as a simple blog site, showcasing what's possible with modern web technologies.

### Why Asteroids?
- **Timeless Classic**: The 1979 Atari game is instantly recognizable
- **Technical Showcase**: Demonstrates physics, collision detection, and game loops
- **Progressive Challenge**: Infinite replayability with increasing difficulty
- **Nostalgic Appeal**: Connects with the golden age of arcade gaming

## 🔐 Privacy & Security

- **No Data Collection**: All scores stored locally on your device
- **No Network Requests**: Game runs entirely in your browser
- **No External Dependencies**: Self-contained game logic
- **No Tracking**: Zero analytics or user monitoring

## 🚀 Getting Started

1. Visit the homepage
2. Press **Cmd+A** or **Ctrl+A**
3. Watch the retro start screen (5 seconds)
4. Use arrow keys and spacebar to play
5. Try to beat your personal best!

---

*This easter egg was built with ❤️ using modern web technologies. Happy gaming! 🎮*