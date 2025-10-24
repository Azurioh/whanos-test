const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (_req, res) => {
	res.json({
		message: "Hello from Whanos Test App!",
		timestamp: new Date().toISOString(),
		environment: process.env.NODE_ENV || "development",
	});
});

// Health check endpoint
app.get("/health", (_req, res) => {
	res.json({
		status: "healthy",
		uptime: process.uptime(),
		memory: process.memoryUsage(),
	});
});

// API endpoint
app.get("/api/hello", (req, res) => {
	const name = req.query.name || "World";
	res.json({
		message: `Hello, ${name}!`,
		timestamp: new Date().toISOString(),
	});
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
	console.log(`Server is running on port ${PORT}`);
	console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
