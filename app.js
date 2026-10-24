const express = require("express");
const app = express();

const userRouter = require("./Route/users");
app.use(userRouter);

const orderRouter = require("./Route/order");
app.use(orderRouter);

// Keep this AFTER all routers
app.use((req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});