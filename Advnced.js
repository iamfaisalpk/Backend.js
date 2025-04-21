const http = require("http");
const fs =  require("fs");
const path = require("path")

http.createServer((req,rs)=>{
    rs.write("hii welcome");
    console.log(req.url);
    console.log("Test");


    
    rs.end();
}).listen(3006, ()=> console.log("server running"))