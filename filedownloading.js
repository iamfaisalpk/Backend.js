const express = require("express");
const path = require("path")
const app = express();

const port = 7860;

app.use(express.static(path.join(__dirname,"public")))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get('/download', (req,res)=>{
    res.download(path.join(__dirname, 'public/images/images.jpg'))
})


app.listen(port, ()=>{
    console.log(`app is running ${port}`)
})