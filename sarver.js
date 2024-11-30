// Import the http module
const http = require('http');

// Define the server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Status code for OK
  res.setHeader('Content-Type', 'text/plain'); // Set response content type
  res.end('Hello, World!\n'); // Send response
});

// Define the port the server will listen to
const PORT = 3000;

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
