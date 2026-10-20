const http = require("http");
const server = http.createServer( (req, res)=>{ 


    if( req.url == '/' ){
    res.setHeader('Content-type','text/html');
    res.end(
        `
        <form action="/message" method="POST">
        <label>Name:</label>
        <input type="text" name="username"></input>    
        <button type="submit">Add</button>
        <h1>change occur</h1>

        <h1> nodeman installed succesfully</h1>
        </form>
        
        `
    )
}
})

let port =3000;
server.listen( port, ()=>{
    console.log("server running")
})