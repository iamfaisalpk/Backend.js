const express = require("express");
const app = express();
const router = express.Router();

const port = 5050;

const middleware = (req,res,next) =>{
    console.log(`${new Date()} --- Request [${req.method}] [${req.url}]`);
    next();
};

app.use(middleware);


app.listen(port, ()=>{
    console.log(`running  file: ${port}`);
    
})

// Router middleware

router.route("/").get(getUsers).post(createUsers)
app.use("/api/users", router);


const getUsers = (req,res)=>{
    res.json({message: "get all users"})
}

const createUsers = (req,res)=>{
    res.json({message : "create ew users"})
}