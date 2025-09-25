# Financfy Web Automation

End-to-end UI test automation project using Playwright Test for the Financfy web application.

## Prerequisites

### Local Development
- Node.js LTS (v18+ recommended)
- npm (comes with Node.js)
- Playwright browsers (installed via command below)
- Optional: Allure Commandline (for HTML reports)

### Docker Development
- Docker Engine (v20+ recommended)
- Docker Compose (v2+ recommended)

## Getting Started

### Local Development Setup

1. Install dependencies

```powershell
npm install
```

2. Install Playwright browsers

```powershell
npx playwright install
```

> If you are on Linux containers/CI, you may need: `npx playwright install --with-deps`.

### Docker Setup

1. Build and run tests using Docker Compose

```bash
# Run tests in staging environment
docker-compose up playwright-staging

# Run tests in production environment (using profile)
docker-compose --profile production up playwright-production

# View test reports in browser
docker-compose --profile reports up report-server
```

2. Or build the Docker image manually

```bash
# Build the image
docker build -t financify-automation .

# Run tests
docker run --rm -v $(pwd)/test-results:/app/test-results financify-automation
```

## Scripts

This project defines the following npm scripts (see `package.json`):

- `npm run test:staging` – runs the test suite against the staging environment
- `npm run test:prod` – runs the test suite against the production environment

These scripts set the `ENV` variable via `cross-env`, e.g. `ENV=staging` or `ENV=production`, and then execute `npx playwright test`.

## Running Tests

### Local Execution

- Run against staging

```powershell
npm run test:staging
```

- Run against production

```powershell
npm run test:prod
```

### Docker Execution

- Run tests in staging environment

```bash
docker-compose up playwright-staging
```

- Run tests in production environment

```bash
docker-compose --profile production up playwright-production
```

- View test reports (after running tests)

```bash
docker-compose --profile reports up report-server
# Access reports at http://localhost:9323
```

- Filter by test title or grep (examples)

```powershell
npx playwright test -g "Login"
```

- Run headed / choose browser

```powershell
npx playwright test --headed --project=chromium
```

> You can combine the above flags with the npm scripts as needed.

## Reports (Allure)

This project includes `allure-playwright` as a dev dependency. If the Playwright reporter is configured for Allure in `playwright.config.*`, test runs will create an `allure-results/` directory.

1. Install Allure commandline (one-time):
   - Via npm: `npm i -g allure-commandline`
   - Or see docs: https://docs.qameta.io/allure/

2. Generate and open the report:

```powershell
# Generate to ./allure-report
npx allure generate ./allure-results --clean -o ./allure-report

# Open the report locally
npx allure open ./allure-report
```

If you do not see `allure-results/` after a run, confirm the Allure reporter is enabled in the Playwright configuration.

## Environment Configuration

- The project uses `cross-env` to supply `ENV` to test runs (e.g., `ENV=staging`, `ENV=production`).
- The `dotenv` package is available to load environment variables from a file. If your config or tests call `dotenv.config()`, create a `.env` file at the project root for shared variables. You may also keep separate files per environment (e.g., `.env.staging`, `.env.production`) and load them accordingly in your config.
- Typical items to store: base URLs, credentials for test accounts, API keys for test environments, etc.

> Review your `playwright.config.*` and any setup files to understand exactly how environment variables are consumed.

## Project Structure

The following structure was observed:

```
Financfy-Web-Automation/
├─ .github/                # CI workflows (if configured)
├─ .gitignore
├─ .dockerignore           # Docker ignore file
├─ Dockerfile              # Docker image configuration
├─ docker-compose.yml      # Docker Compose configuration
├─ package.json
├─ package-lock.json
├─ playwright.config.js     # Playwright configuration (reporters, projects, etc.)
├─ tests/                   # Test specs (e2e)
├─ pageObject/              # Page Object Models (POMs)
├─ test-results/           # Test execution results (mounted in Docker)
├─ playwright-report/      # HTML test reports (mounted in Docker)
└─ README.md                # This file
```

Note: If your local tree differs, update this section accordingly.

## Playwright Configuration

The Playwright configuration is typically stored in `playwright.config.js` at the project root. Common items to review/update:

- Projects/browsers (chromium, firefox, webkit)
- Reporters (Allure, HTML, list)
- Test directory and file patterns
- Base URL selection based on `process.env.ENV`
- Global setup/teardown

## Docker Configuration

### Services

The `docker-compose.yml` file defines the following services:

- **playwright-staging**: Runs tests against the staging environment
- **playwright-production**: Runs tests against the production environment (requires `--profile production`)
- **report-server**: Serves Playwright HTML reports on port 9323 (requires `--profile reports`)

### Volumes

- `./test-results:/app/test-results` - Mounts test results to the host
- `./playwright-report:/app/playwright-report` - Mounts HTML reports to the host
- `./.env:/app/.env:ro` - Mounts environment configuration (read-only)

### Environment Variables

The Docker containers use the following environment variables:

- `ENV`: Set to `staging` or `production` to determine which environment to test
- `NODE_ENV`: Set to `production` for optimized Node.js runtime

### Docker Commands

```bash
# Build the image
docker-compose build

# Run staging tests
docker-compose up playwright-staging

# Run production tests
docker-compose --profile production up playwright-production

# Start report server
docker-compose --profile reports up report-server

# Clean up containers and volumes
docker-compose down -v

# View logs
docker-compose logs playwright-staging
```

## Continuous Integration

- If `.github/workflows/` exists, tests can be executed in CI (GitHub Actions). Ensure the workflow installs dependencies, installs browsers, and runs the same scripts used locally.

Example steps for GitHub Actions (conceptual):

**Using Node.js:**
```yaml
- uses: actions/setup-node@v4
  with:
    node-version: 20
- run: npm ci
- run: npx playwright install --with-deps
- run: npm run test:staging
```

**Using Docker:**
```yaml
- name: Build and run tests
  run: |
    docker-compose build
    docker-compose up --abort-on-container-exit playwright-staging
- name: Upload test results
  uses: actions/upload-artifact@v4
  if: always()
  with:
    name: playwright-report
    path: playwright-report/
```

## Troubleshooting

- Ensure browsers are installed: `npx playwright install`
- If tests can’t find the right URL, verify `ENV` and any `.env*` files are in place and loaded by config
- If Allure report is empty, check that the Allure reporter is enabled in `playwright.config.*` and that `allure-results/` is generated during runs

## License

ISC (see `package.json`).
