
const express = require("express");
const app = express();

app.get("/" ,(req, res) => {
    res.send("welcome to express"); 
});

app.get("/products", (req, res) => {
    res.send("Here is the list of all products.");
});

app.post("/products", (req, res) => {
    res.send("A new Product has been created.");
});

app.get("/categories", (req, res) => {
    res.send("Here is the list of all categories.");
});

app.post("/categories", (req, res) => {
    res.send("A new catergory has been added.");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
