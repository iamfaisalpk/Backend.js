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



const getUsers = (req,res)=>{
    res.json({message: "get all users"})
}

const createUsers = (req,res)=>{
    console.log("this the req body from cient :",req.body)
    res.json({message : "create ew users"})
}

const fakeAuth = (req,res,next)=>{
    const auth = true;
    if(auth){
        console.log("user authStatus:", auth)
        next();
    } else {
        res.status(401);
        throw new Error("user is not autherized")
    }
}

router.use(fakeAuth);

router.route("/").get(getUsers).post(createUsers)
app.use("/api/users", router);

// error hadling middleware

const error = (err, req,res, next)=>{
    const status = res.statusCode ? statusCode : 500;
    res.status(statusCode);

    switch (statusCode) {
        case 401 :
            res.json({
                title : "Unathorized",
                message: err.message,
            })
            break;
        case 404 :
            res.json({
                title : "Not Found",
                message: err.message,
            })
            break;
        case 500 :
            res.json({
                title : "Server Error",
                message: err.message,
            })
            break;
        default:
        break;
    }
}

app.use(error)

