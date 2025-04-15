// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.write("hi")
//     res.end()
// })

// server.listen("4040")

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     if (req.url === '/hj'){
//         res.write('hloo')
//         res.end()
//     }else {
//         res.end("error")
//     }
// })

// server.listen("8080")

const http = require("http");

const server = http.createServer((req,res)=>{
    res.write("hello, task");
    res.end();
});

server.listen(3000, ()=>{
    console.log("server side running")
})


// const fs = require('fs');

// console.log("start");

// fs.readFile('file.text','utf8',(err,data)=>{
//     if (err)throw err;
//     console.log("file data:", data)
// })

// console.log("end")