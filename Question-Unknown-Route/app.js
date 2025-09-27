const express = require("express");
const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET /products endpoint
app.get("/products", (req, res) => {
  res.send("Here is the list of all products.");
});

// POST /products endpoint
app.post("/products", (req, res) => {
  res.send("A new product has been added.");
});

// GET /categories endpoint
app.get("/categories", (req, res) => {
  res.send("Here is the list of all categories.");
});

// POST /categories endpoint
app.post("/categories", (req, res) => {
  res.send("A new category has been created.");
});

// Wildcard route for undefined routes
app.use("*", (req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
