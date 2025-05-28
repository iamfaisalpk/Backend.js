const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app =express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then (()=> console.log("connected mongoDB"))
    .catch((err)=>{
        console.error("connection failed",err.message)
        process.exit(1)
    });

app.get("/", (req,res)=>{
    res.send("Server is running and mongoDB connected")
});

const PORT = process.env.PORT || 7860;

app.listen(PORT, ()=>{
    console.log(`Server is running port${PORT}`)
})