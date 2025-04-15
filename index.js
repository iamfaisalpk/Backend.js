const path = require("path")
const fs =require("fs");

fs.mkdir(path.join(__dirname,"/api"),{},(err)=>{
    if(err) throw err
})

console.log(fs);

// console.log(path.join(__dirname,"api","index.js"))