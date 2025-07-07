# Bruno API Testing Automation with Node.js CRUD API

This repository contains an automated API testing setup using [Bruno CLI](https://www.usebruno.com/) and GitHub Actions for a Node.js CRUD API. Bruno is an open-source, offline-first API client and testing tool that stores collections as plain text files, making it easy to version and collaborate on API tests.

## Features
- **Node.js CRUD API** with Express.js
- **Automated API testing** using Bruno CLI
- **CI/CD integration** with GitHub Actions
- **Environment management** for flexible testing
- **Plain text collections** for easy version control
- **HTML test reports** for detailed test results

## Repository Structure
```
├── app.js                    # Node.js Express CRUD API server
├── package.json              # Node.js dependencies and scripts
├── package-lock.json         # Locked dependency versions
├── .gitignore               # Git ignore patterns
├── bruno-crud-automation/    # Bruno test collection for CRUD operations
│   ├── bruno.json           # Bruno collection configuration
│   ├── environments/
│   │   └── crud-dev.bru     # Environment variables for development
│   └── items/               # CRUD API test requests
│       ├── Create Items.bru # POST request to create items
│       ├── Get Items.bru    # GET request to retrieve items
│       └── folder.bru       # Additional test requests
├── .github/
│   └── workflows/
│       └── script.yml       # GitHub Actions workflow for running tests
└── README.md                # This documentation
```

## API Endpoints

The Node.js server provides the following CRUD endpoints:

- `GET /items` - Retrieve all items
- `GET /items/:id` - Retrieve a specific item by ID
- `POST /items` - Create a new item (requires `name` and `value` in body)
- `PUT /items/:id` - Update an existing item
- `DELETE /items/:id` - Delete an item

## Getting Started

### 1. Install Dependencies
```sh
npm install
```

### 2. Install Bruno CLI
You need [Node.js](https://nodejs.org/) installed. Then run:
```sh
npm install -g @usebruno/cli
```

### 3. Start the API Server
```sh
npm start
```
The server will start on port 3000 (or the port specified in the `PORT` environment variable).

### 4. Run API Tests Locally
To run all CRUD API tests with the development environment:
```sh
cd bruno-crud-automation
bru run --env crud-dev
```

### 5. Generate HTML Test Report
```sh
cd bruno-crud-automation
bru run --env crud-dev --reporter-html results.html
```

## Project Files

### API Server
- **app.js**: Express.js server with CRUD operations for items
- **package.json**: Node.js dependencies and start script

### Bruno Test Collection
- **bruno-crud-automation/bruno.json**: Defines the collection and ignored files
- **bruno-crud-automation/environments/crud-dev.bru**: Contains environment variables for development testing
- **bruno-crud-automation/items/**: Contains individual API test requests for CRUD operations

### CI/CD
- **.github/workflows/script.yml**: GitHub Actions workflow that:
  1. Sets up Node.js environment
  2. Installs dependencies
  3. Starts the API server
  4. Waits for server to be ready
  5. Runs Bruno tests with HTML reporting
  6. Uploads test results as artifacts

## Continuous Integration (CI)

This repository uses GitHub Actions to automatically run API tests on every push or pull request to the `main` branch. The workflow:

1. **Checkout code** from the repository
2. **Setup Node.js** version 18
3. **Install dependencies** using npm
4. **Install Bruno CLI** globally
5. **Start API server** in the background
6. **Wait for server** to be ready on port 3000
7. **Run API tests** using Bruno with HTML reporting
8. **Upload test results** as downloadable artifacts

Test results are available as HTML reports in the GitHub Actions artifacts section.

## Environment Variables

The Bruno collection uses environment variables defined in `bruno-crud-automation/environments/crud-dev.bru`:
- Base URL for API endpoints
- Any additional configuration needed for testing

## Learn More
- [Bruno CLI Documentation](https://www.usebruno.com/docs/cli/introduction)
- [Bruno GitHub Repository](https://github.com/usebruno/bruno)
- [Express.js Documentation](https://expressjs.com/)

## License
MIT 