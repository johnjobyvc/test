# Spec Driven Development (SDD) Workflow Guide

## What is Spec Driven Development?

Spec Driven Development is a software development methodology where:
1. **Specifications are written first** - Define what the software should do
2. **Tests are created from specs** - Write test cases that verify spec compliance
3. **Code is implemented to pass tests** - Develop features that make tests pass
4. **Continuous verification** - Regularly verify code meets specifications

**Benefits:**
- Clear requirements before coding
- Better test coverage
- Reduced bugs and rework
- Clear communication of expected behavior
- Easier maintenance and refactoring

## SDD Process Flow

```
┌─────────────────────────────────────────────────────────────┐
│ 1. WRITE SPECIFICATION                                      │
│    Define what the system should do                         │
│    Document features, requirements, edge cases              │
└──────────────┬──────────────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. CREATE TEST SPECIFICATIONS                               │
│    Write test cases based on specs                          │
│    Use Given-When-Then format                               │
│    Cover happy paths, edge cases, and errors                │
└──────────────┬──────────────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. IMPLEMENT CODE                                           │
│    Write code to pass test specifications                   │
│    Follow TDD principles                                    │
│    Make tests pass, refactor                                │
└──────────────┬──────────────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. VERIFY COMPLIANCE                                        │
│    Run test suite                                           │
│    Verify all tests pass                                    │
│    Update specs if needed                                   │
└──────────────┬──────────────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. REVIEW & ITERATE                                         │
│    Code review against spec                                 │
│    Update spec with learnings                               │
│    Refactor code to improve clarity                         │
└──────────────┬──────────────────────────────────────────────┘
               │
               ▼
         [REPEAT]
```

## Files in This Project

### 1. **SPEC.md**
   - Comprehensive specification document
   - Defines all features and behaviors
   - Documents architecture and requirements
   - Reference for developers and QA

### 2. **TEST_SPEC.js**
   - Test case specifications using Jasmine/Jest format
   - BDD-style (Behavior Driven Development) with Given-When-Then
   - Organized by feature areas
   - Each test explains expected behavior

### 3. **game.js**
   - Implementation of the Tetris game
   - Code should pass all tests in TEST_SPEC.js
   - Must comply with requirements in SPEC.md

### 4. **index.html & styles.css**
   - UI layer
   - Should support all behaviors defined in specs

## How to Use This SDD Setup

### For New Features
1. **Add to SPEC.md**
   - Document new feature in the appropriate section
   - Include any new requirements or behaviors

2. **Add to TEST_SPEC.js**
   - Write test cases for the new feature
   - Use Given-When-Then format
   - Include edge cases

3. **Implement in game.js**
   - Write code to make the new tests pass
   - Follow existing code patterns
   - Ensure backward compatibility

4. **Run Tests**
   - Execute test suite
   - Verify all tests pass
   - No regressions

### For Bug Fixes
1. **Document the bug in SPEC.md**
   - Note the incorrect behavior
   - Describe expected behavior

2. **Add failing test to TEST_SPEC.js**
   - Create test that demonstrates the bug

3. **Fix the bug in game.js**
   - Make the test pass
   - Verify fix doesn't break other tests

4. **Verify**
   - Run full test suite
   - Confirm fix is complete

## Test Categories

The TEST_SPEC.js file includes tests for:

- **Canvas & Rendering** - Display correctness
- **Game State & Initialization** - Starting state
- **Tetromino Definitions** - Piece shapes
- **Movement & Collision** - Game physics
- **Rotation Mechanics** - Piece rotation
- **Line Clearing** - Row removal logic
- **Scoring System** - Point calculation
- **Game Over Condition** - End state detection
- **Next Piece Preview** - Queue display
- **User Controls** - Input handling
- **Game Loop & Animation** - Performance
- **UI Elements** - Component availability
- **Edge Cases** - Robustness

## Test Format: Given-When-Then

Each test follows this pattern:

```javascript
test('Description of expected behavior', () => {
  // GIVEN: Initial state or setup
  // WHEN: Action or trigger
  // THEN: Expected result
});
```

**Example:**
```javascript
test('Piece should move left when not at boundary', () => {
  // GIVEN: An active tetromino in playfield center
  // WHEN: Moving left
  // THEN: Piece column should decrease by 1
  //       AND: Position should be valid
});
```

## Running Tests

When test framework is set up (Jest, Jasmine, etc.):

```bash
# Run all tests
npm test

# Run specific test file
npm test TEST_SPEC.js

# Run tests in watch mode
npm test -- --watch

# Run with coverage
npm test -- --coverage
```

## Maintaining Specs During Development

### When Code Changes
- Update relevant test in TEST_SPEC.js
- Update SPEC.md documentation
- Ensure backward compatibility
- Document breaking changes

### When Requirements Change
- Update SPEC.md first
- Update affected tests in TEST_SPEC.js
- Implement code changes
- Verify all tests pass

### When Bugs Are Found
- Add test case that demonstrates bug
- Document bug in SPEC.md as "Known Issue"
- Fix code to pass new test
- Remove "Known Issue" from SPEC.md when fixed

## SDD Best Practices

1. **Write Specs First** - Before any coding
2. **Make Tests Fail First** - Add tests before implementation
3. **Implement to Pass Tests** - Don't over-engineer
4. **Keep Specs Updated** - As code evolves
5. **Review Specs in PR** - Ensure changes match spec
6. **Use Clear Language** - Specs should be understandable
7. **Document Examples** - Include specific use cases
8. **Test Edge Cases** - Don't just test the happy path

## Integration with Development Workflow

### Code Review Checklist
- [ ] Does code match SPEC.md?
- [ ] Are all new tests passing?
- [ ] Are existing tests still passing?
- [ ] Is SPEC.md updated if behavior changed?
- [ ] Are edge cases covered?

### Quality Gates
1. All tests must pass
2. Code must comply with SPEC.md
3. Test coverage should increase (or stay high)
4. Documentation must be current

## Next Steps for This Project

1. **Set up test framework**
   - Choose: Jest, Jasmine, or similar
   - Install and configure for vanilla JS

2. **Implement test infrastructure**
   - Create test runner configuration
   - Set up DOM environment for testing

3. **Run tests incrementally**
   - Run tests for each feature area
   - Fix failing tests in game.js

4. **Establish CI/CD**
   - Run tests on every commit
   - Fail build if tests don't pass
   - Block merge until all tests pass

5. **Monitor coverage**
   - Aim for >80% code coverage
   - Identify untested code paths
   - Add tests for critical paths

## Resources

- **BDD Format**: Behavior Driven Development with Given-When-Then
- **Jest**: JavaScript Testing Framework (https://jestjs.io/)
- **Jasmine**: JavaScript Testing Framework (https://jasmine.github.io/)
- **TDD**: Test-Driven Development practices

## Questions?

Refer to:
- **SPEC.md** - What should the code do?
- **TEST_SPEC.js** - How will we verify it works?
- **game.js** - How is it implemented?
