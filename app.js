
const express = require("express");
const app = express();

app.get("/" ,(req, res) => {
    res.send("welcome to express"); 
});

// app.get("/products", (req, res) => {
//     res.send("Here is the list of all products.");
// });

// app.post("/products", (req, res) => {
//     res.send("A new Product has been created.");
// });

// app.get("/categories", (req, res) => {
//     res.send("Here is the list of all categories.");s
// });

// app.post("/categories", (req, res) => {
//     res.send("A new catergory has been added.");
// });
// app.use( (req, res)=>{
//     res.status(404).send('<h1>404 - Page Not Found</h1>');
// })

app.get("/welcome/:userid", (req, res)=>{
    const id= req.params.userid;
    const name = req.query.name;
    const role = req.query.role;
    res.send( `helo my name is ${name} is & my role is ${role}`);
})
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
