const http = require("http");
const fs =  require("fs");
const path = require("path")

const server = http.createServer((req,rs)=>{
    // rs.write("hii welcome");

    if (req.url === "/"){
        fs.readFile(path.join(__dirname, "view", "index.html"),"utf8", (err,data)=>{
            if (err) throw err;
            rs.writeHead(200, {"Content-Type" : "text/html"})
            rs.end(data);
        })
    } 
    
    if (req.url === "/contact"){
        fs.readFile(path.join(__dirname, "view", "contact.html"),"utf8", (err,data)=>{
            if (err) throw err;
            rs.writeHead(200, {"Content-Type" : "text/html"})
            rs.end(data);
        })
    }
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> console.log(`server running on ${PORT}`))