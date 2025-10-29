# SwaggerTest1

A Swagger UI implementation for viewing and interacting with OpenAPI specification files.

## Overview

This project provides a web-based Swagger UI interface for exploring and testing API documentation defined in OpenAPI format. It includes sample OpenAPI specifications and a simple Node.js server to serve the documentation.

## Features

- 🚀 Interactive Swagger UI for API documentation
- 📄 Multiple OpenAPI specification files
- 🔄 Easy switching between different API specs
- 🌐 Simple Express.js server for local development
- 📱 Responsive design

## Included API Specifications

1. **Pet Store API** (`openapi/petstore.yaml`)
   - CRUD operations for pet management
   - Sample endpoints for listing, creating, updating, and deleting pets

2. **User Management API** (`openapi/users.yaml`)
   - User management operations
   - Authentication endpoints (login/logout)
   - JWT Bearer token security scheme

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jwehlen-cell/SwaggerTest1.git
   cd SwaggerTest1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Start the Server

Run the following command to start the local development server:

```bash
npm start
```

The server will start on `http://localhost:3000` by default.

### Access Swagger UI

Open your web browser and navigate to:
```
http://localhost:3000
```

You'll see the Swagger UI interface with a dropdown menu to select between different API specifications.

## Project Structure

```
SwaggerTest1/
├── openapi/              # OpenAPI specification files
│   ├── petstore.yaml     # Pet Store API specification
│   └── users.yaml        # User Management API specification
├── index.html            # Main Swagger UI HTML page
├── server.js             # Express.js server
├── package.json          # Node.js dependencies and scripts
├── .gitignore           # Git ignore file
└── README.md            # This file
```

## Adding New API Specifications

To add a new OpenAPI specification:

1. Create a new YAML or JSON file in the `openapi/` directory
2. Add the specification following OpenAPI 3.0 format
3. Update `index.html` to add the new spec to the dropdown menu:
   ```html
   <option value="openapi/your-new-spec.yaml">Your API Name</option>
   ```

## Configuration

### Port Configuration

The server uses port 3000 by default. To use a different port, set the `PORT` environment variable:

```bash
PORT=8080 npm start
```

### CORS

CORS is enabled by default to allow API requests from different origins during development.

## Technologies Used

- [Swagger UI](https://swagger.io/tools/swagger-ui/) - Interactive API documentation
- [Express.js](https://expressjs.com/) - Web server framework
- [OpenAPI 3.0](https://swagger.io/specification/) - API specification format

## License

MIT