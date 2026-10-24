const express= require( 'express');
const app = express();

app.use((req, res , next)=>{
    console.log(`${req.method} request is made with ${req.url}`);
})
app.get('/products' ,(req, res)=>{
    res.send( "here is  lisit of prducts");
});
app.post ('/products' , (req , res) =>{
    res.send( " A new product is added");
});
app.get('/categories', (req, res)=>{
    res.send( " Here is lisit of categories");
});
app.post('/categories' , (req ,res)=>{
    res.send( "A new category is added");
});
app.use ( ( req , res)=>{
    res.status(404).send("<h1>404 - Page not found</h1>");
});
app.listen(4000, (req , res)=>{
    console.log( "server is runnning on http://localhost:4000")
})