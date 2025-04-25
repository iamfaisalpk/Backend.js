const express = require("express");
const app = express();
const path =require("path")

const port = 3001;

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get('/product', (req,res)=>{
    res.sendFile(path.join(__dirname, "product.html"))
})

app.get('/About',(req,res)=>{
    res.sendFile(path.join(__dirname,"About.html"))
})

app.get('/Contact', (req,res)=>{
    res.sendFile(path.join(__dirname, "Contactt.html"))
})

app.listen(port, ()=>{
    console.log(`running server: ${port}`);
    
})
