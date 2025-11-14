// Tetris Game - Practical Test Implementation Guide
// This file shows how to set up and run actual tests for the Tetris game

/**
 * SETUP: Jest Configuration (jest.config.js or in package.json)
 * 
 * {
 *   "testEnvironment": "jsdom",
 *   "testMatch": ["**/*.test.js", "**/*.spec.js"],
 *   "collectCoverage": true,
 *   "coveragePathIgnorePatterns": ["/node_modules/"],
 *   "setupFilesAfterEnv": ["<rootDir>/test-setup.js"]
 * }
 */

/**
 * SETUP: Test Setup File (test-setup.js)
 * This file runs before all tests to initialize the DOM
 */
function setupTestEnvironment() {
  // Create the HTML structure needed for tests
  document.body.innerHTML = `
    <div class="container">
      <header>
        <h1>Tetris</h1>
        <div class="hud">
          <div class="scoreboard">
            <div>Score</div>
            <div id="score">0</div>
          </div>
          <div class="scoreboard">
            <div>Lines</div>
            <div id="lines">0</div>
          </div>
          <div class="next">
            <div>Next</div>
            <canvas id="next" width="96" height="96"></canvas>
          </div>
        </div>
      </header>
      <main>
        <canvas id="game" width="320" height="640"></canvas>
        <div class="controls">
          <button id="left">◀</button>
          <button id="rotate">⟳</button>
          <button id="right">▶</button>
          <button id="down">▼</button>
        </div>
      </main>
    </div>
  `;
}

/**
 * TEST SUITE 1: Canvas & Rendering Setup
 * File: game.test.js or game.spec.js
 */

describe('Tetris Game - Canvas & Rendering', () => {
  beforeEach(() => {
    setupTestEnvironment();
    // Load game.js here - inject the module or require it
  });

  test('Game canvas should be 320x640', () => {
    const canvas = document.getElementById('game');
    expect(canvas).toBeTruthy();
    expect(canvas.width).toBe(320);
    expect(canvas.height).toBe(640);
  });

  test('Next preview canvas should be 96x96', () => {
    const nextCanvas = document.getElementById('next');
    expect(nextCanvas).toBeTruthy();
    expect(nextCanvas.width).toBe(96);
    expect(nextCanvas.height).toBe(96);
  });

  test('Context should be accessible', () => {
    const canvas = document.getElementById('game');
    const context = canvas.getContext('2d');
    expect(context).toBeTruthy();
  });
});

/**
 * TEST SUITE 2: Game State Initialization
 */

describe('Tetris Game - State Initialization', () => {
  beforeEach(() => {
    setupTestEnvironment();
  });

  test('Initial score should be displayed as 0', () => {
    const scoreEl = document.getElementById('score');
    expect(scoreEl.textContent).toBe('0');
  });

  test('Initial lines should be displayed as 0', () => {
    const linesEl = document.getElementById('lines');
    expect(linesEl.textContent).toBe('0');
  });

  test('All control buttons should be present', () => {
    const leftBtn = document.getElementById('left');
    const rightBtn = document.getElementById('right');
    const rotateBtn = document.getElementById('rotate');
    const downBtn = document.getElementById('down');

    expect(leftBtn).toBeTruthy();
    expect(rightBtn).toBeTruthy();
    expect(rotateBtn).toBeTruthy();
    expect(downBtn).toBeTruthy();
  });
});

/**
 * TEST SUITE 3: Tetromino Verification
 */

describe('Tetris Game - Tetromino Definitions', () => {
  // Helper function to validate tetromino
  const isValidTetromino = (piece) => {
    return Array.isArray(piece) && 
           piece.length > 0 && 
           piece.every(row => Array.isArray(row) && row.length > 0) &&
           piece.flat().some(cell => cell === 1); // At least one filled cell
  };

  test('I-Tetromino should be defined', () => {
    // Access tetrominos object from game.js
    expect(window.tetrominos?.I).toBeTruthy();
    expect(isValidTetromino(window.tetrominos.I)).toBe(true);
  });

  test('O-Tetromino should be 2x2 all filled', () => {
    const O = window.tetrominos?.O;
    expect(O).toBeTruthy();
    expect(O.length).toBe(2);
    expect(O[0].length).toBe(2);
    expect(O[0][0]).toBe(1);
    expect(O[0][1]).toBe(1);
    expect(O[1][0]).toBe(1);
    expect(O[1][1]).toBe(1);
  });

  test('All tetromino types should exist', () => {
    const types = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
    types.forEach(type => {
      expect(window.tetrominos?.[type]).toBeTruthy();
    });
  });
});

/**
 * TEST SUITE 4: Control Button Functionality
 */

describe('Tetris Game - Control Buttons', () => {
  beforeEach(() => {
    setupTestEnvironment();
  });

  test('Left button should have click handler', () => {
    const leftBtn = document.getElementById('left');
    const listeners = getEventListeners(leftBtn)?.click;
    expect(listeners?.length).toBeGreaterThan(0);
  });

  test('Right button should have click handler', () => {
    const rightBtn = document.getElementById('right');
    const listeners = getEventListeners(rightBtn)?.click;
    expect(listeners?.length).toBeGreaterThan(0);
  });

  test('Rotate button should have click handler', () => {
    const rotateBtn = document.getElementById('rotate');
    const listeners = getEventListeners(rotateBtn)?.click;
    expect(listeners?.length).toBeGreaterThan(0);
  });

  test('Down button should have click handler', () => {
    const downBtn = document.getElementById('down');
    const listeners = getEventListeners(downBtn)?.click;
    expect(listeners?.length).toBeGreaterThan(0);
  });
});

/**
 * TEST SUITE 5: Game Loop Verification
 * Note: This requires extracting game loop logic into testable functions
 */

describe('Tetris Game - Game Loop', () => {
  test('Game should start game loop', () => {
    // Verify requestAnimationFrame is being used
    const rafSpy = jest.spyOn(window, 'requestAnimationFrame');
    setupTestEnvironment();
    // Initialize game (implementation depends on code structure)
    expect(rafSpy).toHaveBeenCalled();
    rafSpy.mockRestore();
  });
});

/**
 * HELPER FUNCTIONS FOR MANUAL TESTING
 * Use these functions in browser console to manually verify specs
 */

window.testHelpers = {
  /**
   * Check if canvas is rendering properly
   */
  testCanvasRendering: () => {
    const canvas = document.getElementById('game');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 32, 32); // Draw one grid cell
    console.log('✓ Canvas rendering test: Check if white square appears on grid');
  },

  /**
   * Check if score updates
   */
  testScoreUpdate: () => {
    const scoreEl = document.getElementById('score');
    const initialScore = scoreEl.textContent;
    console.log('Initial score:', initialScore);
    // Manually trigger a score update in your game logic
    console.log('Updated score should appear above');
  },

  /**
   * Check if lines counter updates
   */
  testLinesUpdate: () => {
    const linesEl = document.getElementById('lines');
    const initialLines = linesEl.textContent;
    console.log('Initial lines:', initialLines);
    // Manually trigger a line clear in your game logic
    console.log('Updated lines should appear above');
  },

  /**
   * Verify all tetromino types
   */
  testAllTetrominos: () => {
    const types = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
    types.forEach(type => {
      const piece = window.tetrominos?.[type];
      console.log(`${type}-Tetromino:`, piece ? '✓ Present' : '✗ Missing');
    });
  },

  /**
   * Test piece movement
   */
  testPieceMovement: () => {
    console.log('Testing piece movement:');
    console.log('- Click LEFT button: piece should move left');
    console.log('- Click RIGHT button: piece should move right');
    console.log('- Click DOWN button: piece should move down');
    console.log('- Click ROTATE button: piece should rotate');
  },

  /**
   * Run all manual tests
   */
  runAllManualTests: () => {
    console.log('=== Tetris SDD Manual Tests ===');
    window.testHelpers.testCanvasRendering();
    window.testHelpers.testAllTetrominos();
    console.log('--- Manual Actions Required ---');
    window.testHelpers.testPieceMovement();
  }
};

/**
 * INTEGRATION TEST EXAMPLE
 * Tests the interaction between multiple components
 */

describe('Tetris Game - Integration Tests', () => {
  beforeEach(() => {
    setupTestEnvironment();
  });

  test('Clicking left button should trigger game logic', () => {
    const leftBtn = document.getElementById('left');
    const clickEvent = new MouseEvent('click', { bubbles: true });
    
    // Spy on any game logic function if exposed
    // const gameLogicSpy = jest.spyOn(window.gameState, 'moveLeft');
    
    leftBtn.dispatchEvent(clickEvent);
    
    // Verify game responded
    // expect(gameLogicSpy).toHaveBeenCalled();
  });

  test('Score display should update after game event', () => {
    const scoreEl = document.getElementById('score');
    const initialScore = scoreEl.textContent;

    // Simulate a scoring event
    // This depends on how the game exposes internal logic
    // For example: window.gameState.addScore(100);

    // Then check if display updated
    // expect(scoreEl.textContent).not.toBe(initialScore);
  });
});

/**
 * BROWSER CONSOLE COMMANDS
 * Run these directly in browser developer tools to test
 * 
 * // Test all tetrominos
 * window.testHelpers.testAllTetrominos();
 * 
 * // Test canvas rendering
 * window.testHelpers.testCanvasRendering();
 * 
 * // Run all tests
 * window.testHelpers.runAllManualTests();
 */

/**
 * NPM SCRIPTS (Add to package.json)
 * 
 * {
 *   "scripts": {
 *     "test": "jest",
 *     "test:watch": "jest --watch",
 *     "test:coverage": "jest --coverage",
 *     "test:debug": "node --inspect-brk node_modules/.bin/jest --runInBand"
 *   }
 * }
 */

/**
 * CHECKLIST FOR SDD COMPLIANCE
 * 
 * □ SPEC.md documents all features
 * □ TEST_SPEC.js covers all features with Given-When-Then
 * □ game.js implements all spec requirements
 * □ All tests pass
 * □ Test coverage > 80%
 * □ No console errors
 * □ Game is playable
 * □ All controls work
 * □ Score/lines update correctly
 * □ Game over condition works
 * 
 * When all checkboxes are ✓, the project is SDD-compliant!
 */
