# SDD Quick Start Guide for Tetris Game

## What You Have Now

✓ **SPEC.md** - Complete specification of the Tetris game
✓ **TEST_SPEC.js** - Test cases written in Given-When-Then format  
✓ **TEST_IMPLEMENTATION.js** - Practical testing setup and examples
✓ **SDD_WORKFLOW.md** - Process and best practices
✓ **game.js** - Game implementation to verify against specs
✓ **index.html & styles.css** - UI layer

## Quick Start: 3 Steps

### Step 1: Understand the Specification
```bash
# Open and read SPEC.md
# This tells you WHAT the game should do
# - Features
# - Architecture  
# - Game mechanics
# - Requirements
```

### Step 2: Review the Test Specs
```bash
# Open TEST_SPEC.js
# This tells you HOW to verify the game works
# - Each test is a specification requirement
# - Uses Given-When-Then format
# - Covers happy paths and edge cases
```

### Step 3: Verify Implementation
```bash
# Check if game.js implements all specs
# Use manual testing in browser:
# 1. Open index.html
# 2. Play the game
# 3. Check all features work per SPEC.md
```

## Manual Testing Checklist

Use this to verify the game matches the specification:

### Canvas & Rendering
- [ ] Game board appears on screen (320x640px)
- [ ] Grid cells are visible (32px each)
- [ ] Next piece preview displays (96x96px)
- [ ] Black background renders correctly

### Game State
- [ ] Score displays as "0" at start
- [ ] Lines counter displays as "0" at start
- [ ] Game doesn't start in "Game Over" state

### Tetromino Behavior
- [ ] I-piece appears (4-cell line)
- [ ] O-piece appears (2x2 square)
- [ ] J-piece appears (L-shape variant)
- [ ] L-piece appears (L-shape)
- [ ] S-piece appears (S-shape)
- [ ] T-piece appears (T-shape)
- [ ] Z-piece appears (Z-shape)
- [ ] Pieces spawn at top-center
- [ ] Next piece preview shows upcoming tetromino

### Movement Controls
- [ ] **LEFT button**: Piece moves left (if not at boundary)
- [ ] **RIGHT button**: Piece moves right (if not at boundary)
- [ ] **DOWN button**: Piece moves down (accelerates drop)
- [ ] **ROTATE button**: Piece rotates 90° clockwise
- [ ] Pieces cannot move through walls
- [ ] Pieces cannot move through other pieces
- [ ] Pieces cannot overlap with placed pieces

### Auto-Drop
- [ ] Pieces automatically fall over time
- [ ] Fall speed is regular and noticeable
- [ ] Pieces don't fall through floor

### Line Clearing
- [ ] Completed rows are removed
- [ ] Pieces above cleared lines shift down
- [ ] Lines counter increments
- [ ] Score increases when lines clear
- [ ] Multiple line clears give more points

### Game Over
- [ ] Game ends when new piece cannot spawn
- [ ] Controls stop working after game over
- [ ] Game over state is visually indicated (or can be detected)

### UI Quality
- [ ] All buttons are responsive
- [ ] Display updates smoothly
- [ ] No console errors
- [ ] Layout is centered and aligned
- [ ] Mobile responsive (if required)

## Creating Tests (For Developers)

### When adding a new feature:

1. **Add to SPEC.md**
   ```markdown
   ## New Feature Name
   
   ### Behavior
   - Describe what it does
   - List requirements
   - Document edge cases
   ```

2. **Add to TEST_SPEC.js**
   ```javascript
   test('description of behavior', () => {
     // GIVEN: initial state
     // WHEN: action taken
     // THEN: expected result
   });
   ```

3. **Implement in game.js**
   - Write code to make the test pass
   - Don't over-engineer
   - Keep it simple

4. **Run manual test**
   - Play the game
   - Verify feature works

## File Reference

| File | Purpose | When to Use |
|------|---------|------------|
| **SPEC.md** | What should the game do? | Planning, reference, validation |
| **TEST_SPEC.js** | How do we verify it works? | Writing tests, understanding requirements |
| **TEST_IMPLEMENTATION.js** | How to set up actual tests? | Setting up Jest/Jasmine framework |
| **SDD_WORKFLOW.md** | How do we follow SDD? | Process guidance, best practices |
| **game.js** | How is it implemented? | Development, bug fixes |
| **index.html** | UI structure | View/interaction layer |
| **styles.css** | Visual styling | Appearance |

## Common Questions

### Q: The game doesn't match a spec. What do I do?
**A:** 
1. Check SPEC.md - that's the source of truth
2. Look at TEST_SPEC.js - it tests that spec
3. If test passes but behavior wrong → test needs update
4. If test fails → implement the feature
5. If spec is wrong → update SPEC.md first, then test, then code

### Q: How do I know what to test?
**A:** Everything in SPEC.md should have a test in TEST_SPEC.js

### Q: Can I change the spec?
**A:** Yes! But:
1. Update SPEC.md with reason for change
2. Update TEST_SPEC.js to match new spec
3. Update game.js to pass new tests
4. Document the change

### Q: How do I prioritize fixes?
**A:** 
1. Highest: Failing tests / spec violations
2. High: Game-breaking bugs
3. Medium: Control/UX issues
4. Low: Polish/optimization

### Q: How do I measure progress?
**A:** 
- Compare game behavior to SPEC.md
- Count tests passing vs total tests
- Verify manual checklist items

## Validation Workflow

```
Does game.js behavior match SPEC.md?
├─ YES → Check if all tests in TEST_SPEC.js pass
│  ├─ YES → ✓ COMPLIANT - Project is SDD-complete
│  └─ NO → Update game.js to pass tests
└─ NO → Either update SPEC.md or fix game.js
```

## Code Quality Gates

Before considering a feature complete:

- [ ] Spec is documented in SPEC.md
- [ ] Tests exist in TEST_SPEC.js
- [ ] All tests pass
- [ ] Game.js implements the feature
- [ ] Manual testing confirms behavior
- [ ] No console errors
- [ ] No regressions in other features

## Example: Adding a Feature

### Scenario: Add pause feature

**Step 1: Add to SPEC.md**
```markdown
### Pause Feature
When the player presses pause:
- Game stops updating
- Current piece freezes
- Controls are disabled
- UI shows "PAUSED" indicator
- Pressing pause again resumes
```

**Step 2: Add to TEST_SPEC.js**
```javascript
test('Pressing pause should stop the game', () => {
  // GIVEN: Active game
  // WHEN: User presses pause
  // THEN: Game should stop
  //       AND: Piece should not move
  //       AND: "PAUSED" indicator visible
});
```

**Step 3: Implement in game.js**
```javascript
let isPaused = false;

function togglePause() {
  isPaused = !isPaused;
  updatePauseIndicator();
}

function gameLoop() {
  if (!isPaused) {
    // Update game state
    // Move pieces, clear lines, etc.
  }
  requestAnimationFrame(gameLoop);
}
```

**Step 4: Test manually**
- Load game
- Play
- Test pause/resume
- Verify it works per spec

## Continuous Improvement

Every time you:
- Find a bug → Add a test that demonstrates it
- Add a feature → Document in spec first
- Change behavior → Update all three (spec, test, code)

This keeps everything in sync!

## Success Criteria

Your project follows SDD when:

✓ SPEC.md is complete and current
✓ TEST_SPEC.js covers all specs with tests
✓ All tests pass
✓ game.js behavior matches SPEC.md
✓ Manual testing confirms all features work
✓ Any change updates spec/test/code together
✓ Team understands the specifications

---

**Remember**: Spec Driven Development means the Specification is the source of truth. Tests verify compliance. Code implements it.

Spec → Test → Code → Verify → Iterate
