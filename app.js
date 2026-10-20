const http =  require('http');
const server = http.createServer((req, res)=>{

    const url = req.url;
    const method = req.method;
  //  console.log("server create");
if( req.url == '/' ){
    res.setHeader('Content-type','text/html');
    res.end(
        `
        <form action="/message" method="POST">
        <label>Name:</label>
        <input type="text" name="username"></input>    
        <button type="submit">Add</button>
        </form>
        
        `
    )
}

else{
    if( req.url=='/message'){
        res.setHeader('Content-type' , 'text/html');

        let dataChunk = [];
        req.on('data' , (chunks)=>{
            console.log(chunks)
            dataChunk.push(chunks);
        })

        req.on('end',()=>{
            let combinedBuffer = Buffer.concat(dataChunk);
            console.log( combinedBuffer.toString());
            let value= combinedBuffer.toString().split("=");
            console.log(value);
        })
    } 

}

})
const port= 3001;
server.listen(port, ()=>{
   console.log( "server is running");
})
