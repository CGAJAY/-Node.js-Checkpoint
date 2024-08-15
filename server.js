// Import the http module to create a server
import http from "http";

// Create a server that listens to requests and responds with a message
const server = http.createServer((req, res) => {
	// Set the status code to 200 (OK)
	res.statusCode = 200;
	// Set the content type to HTML
	res.setHeader("Content-Type", "text/html");
	// Send a response with an HTML message
	res.end("<h1>Hello Node!!!!</h1>");
});

// Make the server to listen on port 3000 at localhost
server.listen(3000, "127.0.0.1", () => {
	// Log a message to the console when the server is running
	console.log("Server running at http://127.0.0.1:3000/");
});
