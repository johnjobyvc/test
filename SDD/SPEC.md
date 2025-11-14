# Tetris Game Specification (Spec Driven Development)

## Overview
A vanilla JavaScript Tetris game implementation with canvas-based graphics, score tracking, and touch/keyboard controls.

## Game Architecture

### Canvas & Rendering
- **Main Canvas**: 320x640px grid-based game board
- **Next Preview Canvas**: 96x96px display for upcoming tetromino
- **Grid Size**: 32px per cell (10 columns × 20 rows visible + 2 spawn rows)

### Game State
- **Playfield**: 10×20 grid (columns × rows) with additional spawn rows
- **Score**: Running score counter
- **Lines**: Completed lines counter
- **Game Over Flag**: Indicates end-of-game state
- **Current Tetromino**: Active piece in play
- **Next Tetromino**: Preview of upcoming piece

## Tetromino Specifications

### Supported Pieces
1. **I-Tetromino**: Cyan, 4 cells in line (4×4 matrix)
2. **J-Tetromino**: Blue, L-shape mirrored (3×3 matrix)
3. **L-Tetromino**: Orange, L-shape (3×3 matrix)
4. **O-Tetromino**: Yellow, 2×2 square (2×2 matrix)
5. **S-Tetromino**: Green, S-shape (3×3 matrix)
6. **T-Tetromino**: Purple, T-shape (3×3 matrix)
7. **Z-Tetromino**: Red, Z-shape (3×3 matrix)

### Tetromino Spawning
- Random sequence-based generation (not fully random)
- Spawn position: Top-center of playfield
- Spawn row: -1 or -2 (above visible area)

## Game Mechanics

### Movement
- **Left**: Move tetromino one cell left (if valid)
- **Right**: Move tetromino one cell right (if valid)
- **Down**: Move tetromino one cell down (if valid)
- **Rotate**: Rotate tetromino 90° clockwise (if valid)
- **Hard Drop**: Optional feature (not yet implemented)
- **Auto-Drop**: Tetromino automatically descends at regular intervals

### Collision Detection
- Detect collision with playfield boundaries
- Detect collision with placed pieces
- Detect collision with floor
- Prevent invalid moves through collision detection

### Line Clearing
- Detect fully filled rows
- Remove cleared rows
- Award score for cleared lines
- Update lines counter

### Scoring System
- Base points per line cleared
- Bonus for multiple simultaneous clears (combo)
- Score increments based on game progression

### Game Over Condition
- Tetromino spawns in occupied cell
- Player cannot place new piece

## UI/UX

### Display Elements
- **HUD Section**: Score display, Lines display, Next piece preview
- **Game Board**: Main canvas showing playfield
- **Controls**: Four buttons (Left, Rotate, Right, Down) for game interaction

### Control Methods
- **Button-based**: On-screen buttons for mobile/touch
- **Keyboard**: (To be specified)
- **Touch Events**: (To be specified)

## Technical Requirements

### Performance
- Smooth 60 FPS rendering (via requestAnimationFrame)
- Efficient collision detection
- Minimal memory footprint

### Browser Compatibility
- ES6+ JavaScript support required
- HTML5 Canvas API
- Mobile-responsive design

### Code Organization
- IIFE (Immediately Invoked Function Expression) for scope isolation
- Clear separation of concerns
- Encapsulated game state

## Known Features (To Be Tested)
- ✓ Canvas rendering
- ✓ Tetromino generation and display
- ✓ Movement controls
- ✓ Collision detection
- ✓ Line clearing
- ✓ Score calculation
- ✓ Next piece preview
- ✓ Responsive UI

## Potential Improvements (Future)
- Add keyboard support (Arrow keys, Space for hard drop)
- Implement touch swipe controls
- Add sound effects
- Add difficulty levels
- Add high score persistence (localStorage)
- Add game pause functionality
- Add ghost piece preview
