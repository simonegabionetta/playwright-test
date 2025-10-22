# Playwright Test Project - Learning Journey

This repository contains a Playwright testing project created during the mentorship program in October 2025.

## Project Structure

```
├── tests/
│   └── example.spec.ts        # Example test specifications
├── playwright-report/         # Test execution reports
├── test-results/             # Test execution results
├── playwright.config.ts      # Playwright configuration
└── package.json              # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone this repository:
```bash
git clone https://github.com/simonegabionetta/playwright-test.git
```

2. Install dependencies:
```bash
npm install
```

### Running Tests

To run the tests:

```bash
npx playwright test
```

To run tests with UI mode:

```bash
npx playwright test --ui
```

To view the last test report:

```bash
npx playwright show-report
```

## Test Reports

Test reports are automatically generated after test execution and can be found in the `playwright-report` directory.

## Learning Resources

- [Playwright Official Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)

## License

This project is licensed under the terms included in the LICENSE file.

## Author

Created by Simone Gabionetta as part of the mentorship program with Julio Lima.

---
Last updated: October 22, 2025