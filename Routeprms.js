const express = require("express");
const app = express();

const port = 3080;



app.get("/flights/:from-:to", (req,res)=>{
    res.send(`F`)
})


// app.get("/product/:category/:brad", (req,res)=>{
//     // res.send(req.params.category)
//     const {category} = req.params;
//     const {brad} = req.params;

//     res.send(`Product: ${category} and Brand : ${brad}`)

//     if (category === 'laptop'){
//         res.send("laptop page")
//     } else if (category === 'mobiles'){
//         res.send("mobiles page")
//     } else {
//         res.send("Other Products")
//     }
// })


app.listen(port, ()=>{
    console.log(`app is running ${port}`)
})