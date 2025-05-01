const express = require('express');
const app = express();
const path = require('path');
const port = 1212;

app.get('/product', (req,res)=>{
    res.send('all products')
})

app.get('/User', (req,res)=>{
    res.send('User Profile')
})

app.get('/About', (req,res)=>{
    res.send('About page')
})

app.get('/Home page', (req,res)=>{
    res.send('Welcome to my home')
})


app.listen(port, ()=>{
    console.log(`running server ${port}`)
})