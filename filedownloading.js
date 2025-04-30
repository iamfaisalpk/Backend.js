const express = require("express");
const path = require("path")
const app = express();

const port = 7860;

app.get('/', (req,res)=>{
    res.download(path.join(__dirname, "Sample.txt"))
})


app.listen(port, ()=>{
    console.log(`app is running ${port}`)
})