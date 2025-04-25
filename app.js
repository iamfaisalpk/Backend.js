const express = require("express");
const app = express();
const port = 8600;

app.get('/', (req,res)=>{
    res.send("hoe world kooi");
})

app.listen(port, ()=>{
    console.log(`app listening on port : ${port}`);
    
})