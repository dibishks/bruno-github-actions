# Bruno API Testing Automation

This repository contains an automated API testing setup using [Bruno CLI](https://www.usebruno.com/) and GitHub Actions. Bruno is an open-source, offline-first API client and testing tool that stores collections as plain text files, making it easy to version and collaborate on API tests.

## Features
- **Automated API testing** using Bruno CLI
- **CI/CD integration** with GitHub Actions
- **Environment management** for flexible testing
- **Plain text collections** for easy version control

## Repository Structure
```
├── bruno.json                # Bruno collection configuration
├── echo-bruno.bru            # Example API request (POST to echo endpoint)
├── collection.bru            # (Empty, reserved for future collections)
├── environments/
│   └── ci.bru                # Environment variables for CI (e.g., base URL)
└── .github/
    └── workflows/
        └── script.yml        # GitHub Actions workflow for running tests
```

## Getting Started

### 1. Install Bruno CLI
You need [Node.js](https://nodejs.org/) installed. Then run:
```sh
npm install -g @usebruno/cli
```

### 2. Run API Tests Locally
To run all API tests with the CI environment:
```sh
bru run --env ci
```

### 3. Project Files
- **bruno.json**: Defines the collection and ignored files.
- **echo-bruno.bru**: Example POST request to `https://echo.usebruno.com` with a JSON body.
- **environments/ci.bru**: Contains environment variables (e.g., `base-URL`).
- **.github/workflows/script.yml**: GitHub Actions workflow for CI automation.

## Continuous Integration (CI)
This repository uses GitHub Actions to automatically run API tests on every push or pull request to the `main` branch. The workflow:
1. Checks out the code
2. Sets up Node.js
3. Installs Bruno CLI
4. Runs API tests with the CI environment
5. Uploads an HTML test report as an artifact

See [.github/workflows/script.yml](.github/workflows/script.yml) for details.

## Example Request
The `echo-bruno.bru` file sends a POST request to the echo API:
```json
{
  "name": "Bruno"
}
```

## Learn More
- [Bruno CLI Documentation](https://www.usebruno.com/docs/cli/introduction)
- [Bruno GitHub Repository](https://github.com/usebruno/bruno)

## License
MIT 