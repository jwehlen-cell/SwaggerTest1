const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
// NOTE: For development only. In production, configure with specific allowed origins:
// app.use(cors({ origin: ['https://yourdomain.com', 'https://api.yourdomain.com'] }));
app.use(cors());

// Serve Swagger UI static files from node_modules
// Note: swagger-ui-dist is a public distribution package designed to be served to browsers
app.use('/swagger-ui', express.static(path.join(__dirname, 'node_modules/swagger-ui-dist')));

// Serve OpenAPI files
app.use('/openapi', express.static(path.join(__dirname, 'openapi')));

// Serve index.html for the root route
// NOTE: For production, consider adding rate limiting to prevent DoS attacks:
// const rateLimit = require('express-rate-limit');
// app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger UI available at http://localhost:${PORT}`);
  console.log('\nAvailable OpenAPI specs:');
  console.log(`  - Pet Store API: http://localhost:${PORT}/openapi/petstore.yaml`);
  console.log(`  - User Management API: http://localhost:${PORT}/openapi/users.yaml`);
});
