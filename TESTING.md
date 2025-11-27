# Testing Framework Documentation

## Overview

This document outlines the comprehensive testing framework for the Dar Cape   website. The framework includes unit tests, integration tests, end-to-end tests, and performance monitoring.

## Testing Stack

- **Unit/Integration Tests**: Jest + React Testing Library
- **End-to-End Tests**: Playwright
- **Performance Tests**: Lighthouse CI
- **Coverage**: Jest Coverage Reports
- **CI/CD**: GitHub Actions

## Project Structure

```
├── src/
│   ├── components/
│   │   └── **/__tests__/          # Component unit tests
│   └── utils/
│       └── __tests__/             # Utility function tests
├── __tests__/
│   └── integration/               # Integration tests
├── e2e/                          # End-to-end tests
├── jest.config.js                # Jest configuration
├── jest.setup.js                 # Test setup and mocks
├── playwright.config.ts          # Playwright configuration
└── lighthouserc.js              # Lighthouse CI configuration
```

## Available Test Commands

```bash
# Unit and integration tests
npm test                    # Run all tests once
npm run test:watch         # Run tests in watch mode
npm run test:coverage      # Run tests with coverage report

# End-to-end tests
npm run test:e2e           # Run Playwright tests
npm run test:e2e:ui        # Run Playwright tests with UI mode

# Type checking
npx tsc --noEmit          # TypeScript compilation check

# Linting
npm run lint              # ESLint check
```

## Test Categories

### 1. Unit Tests

**Location**: `src/components/**/__tests__/`

**Purpose**: Test individual components in isolation

**Example**: TeamSection component tests
- Renders correctly with all team members
- Displays proper contact information
- Handles hover interactions
- Validates image sources and alt text

### 2. Integration Tests

**Location**: `__tests__/integration/`

**Purpose**: Test component interactions and data flow

**Example**: API integration tests
- Contact form submission validation
- Admin authentication flow
- Content management operations

### 3. End-to-End Tests

**Location**: `e2e/`

**Purpose**: Test complete user workflows

**Coverage**:
- Homepage functionality
- Team section interactions
- Admin portal authentication
- Content management workflows
- Mobile responsiveness

### 4. Performance Tests

**Configuration**: `lighthouserc.js`

**Metrics**:
- Performance: >80%
- Accessibility: >90%
- Best Practices: >80%
- SEO: >80%

## Writing Tests

### Component Tests

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import YourComponent from '../YourComponent'

describe('YourComponent', () => {
  it('renders correctly', () => {
    render(<YourComponent />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })

  it('handles user interactions', async () => {
    const user = userEvent.setup()
    render(<YourComponent />)
    
    await user.click(screen.getByRole('button'))
    expect(screen.getByText('Updated Text')).toBeInTheDocument()
  })
})
```

### E2E Tests

```typescript
import { test, expect } from '@playwright/test'

test('user workflow', async ({ page }) => {
  await page.goto('/')
  
  await page.click('text=Button Text')
  await expect(page.locator('text=Expected Result')).toBeVisible()
})
```

## Mocking Strategy

### Next.js Internationalization
- Mocked in `jest.setup.js`
- Returns predictable translation strings
- Supports namespace-based translations

### Framer Motion
- Mocked to render static elements
- Prevents animation-related test issues
- Maintains component structure

### Browser APIs
- `IntersectionObserver`: Mocked for viewport tests
- `matchMedia`: Mocked for responsive tests
- `localStorage/sessionStorage`: Mocked for storage tests

## Coverage Requirements

**Minimum Coverage Thresholds**:
- Branches: 70%
- Functions: 70%
- Lines: 70%
- Statements: 70%

**Excluded from Coverage**:
- Layout components
- Loading/Error pages
- Type definitions
- Middleware

## CI/CD Pipeline

### Automated Testing Workflow

1. **Code Quality Checks**
   - TypeScript compilation
   - ESLint validation

2. **Unit & Integration Tests**
   - Jest test suite
   - Coverage reporting

3. **Build Verification**
   - Next.js build process
   - Static export validation

4. **End-to-End Testing**
   - Playwright test suite
   - Multi-browser testing
   - Mobile device testing

5. **Performance Monitoring**
   - Lighthouse CI audits
   - Performance regression detection

### Test Matrix

**Node.js Versions**: 18.x, 20.x
**Browsers**: Chrome, Firefox, Safari, Mobile Chrome, Mobile Safari

## Best Practices

### 1. Test Organization
- Group related tests in `describe` blocks
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)

### 2. Test Data
- Use realistic test data
- Create reusable test fixtures
- Mock external dependencies

### 3. Assertions
- Use specific matchers
- Test user-visible behavior
- Avoid implementation details

### 4. Async Testing
- Use `async/await` for user interactions
- Wait for elements to appear
- Handle loading states properly

### 5. Maintenance
- Keep tests simple and focused
- Update tests when features change
- Remove obsolete tests

## Debugging Tests

### Jest Tests
```bash
# Run specific test file
npm test TeamSection.test.tsx

# Run tests in debug mode
node --inspect-brk node_modules/.bin/jest --runInBand

# Run with verbose output
npm test -- --verbose
```

### Playwright Tests
```bash
# Run with headed browser
npx playwright test --headed

# Run specific test
npx playwright test e2e/homepage.spec.ts

# Debug mode
npx playwright test --debug
```

## Continuous Improvement

### Monitoring
- Track test execution time
- Monitor flaky tests
- Review coverage trends

### Updates
- Regular dependency updates
- Test framework upgrades
- New testing patterns adoption

### Team Guidelines
- Code review for test changes
- Test-driven development practices
- Documentation updates

## Troubleshooting

### Common Issues

1. **Tests timing out**
   - Increase timeout values
   - Check for unresolved promises
   - Verify async operations

2. **Flaky tests**
   - Add proper wait conditions
   - Mock time-dependent operations
   - Stabilize test data

3. **Coverage gaps**
   - Identify untested code paths
   - Add missing test cases
   - Review exclusion patterns

### Getting Help

- Check test logs for detailed error messages
- Review Jest and Playwright documentation
- Use debugging tools and breakpoints
- Consult team testing guidelines

---

This testing framework ensures code quality, prevents regressions, and maintains confidence in deployments. Regular maintenance and updates keep the tests effective and reliable.
