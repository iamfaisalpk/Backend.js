const express = require("express");
const app = express();

const port = 7860;




app.listen(port, ()=>{
    console.log(`app is running ${port}`)
})