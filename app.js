
const express = require("express");
const app = express();

// Middleware to read JSON request bodies
app.use(express.json());

// Import and use the books router
const booksRouter = require("./Route/books");
app.use(booksRouter);

// 404 handler
app.use((req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
