


const express = require("express");
const app = express();

// 1. Create custom middleware
const addUser = (req, res, next) => {
  req.user = "Guest";
  next();
};

// 2. Apply middleware to the /welcome route
app.get("/welcome", addUser, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}</h1>`);
});

// 3. Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
