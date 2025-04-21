const http = require("http");

http.createServer((req,rs)=>{
    rs.write("hii welcome");
    console.log(req.url);
    
    rs.end();
}).listen(3006, ()=> console.log("server running"))