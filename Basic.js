const path =  require("path")
const fs =  require("fs");

const user = "faisal" ; 

// fs.writeFile(path.join(__dirname, "/API", "api.txt"), `UserName : Iam ${user}`,(err)=>{
//     if(err) throw err;
// })


// fs.appendFile(path.join(__dirname, "/API", "api.txt"), `\n \t UserName : ${user}`, (error)=>{
//     if (error) throw error;
// })


// fs.readFile(path.join(__dirname, "/API", "api.txt"), "utf8", (error,dat)=>{
//     if (error) throw error;

//     console.log(dat)
// })

const EventEmitter =  require("events");
const emitter = new EventEmitter();


emitter.on("msg", (data)=>{
    console.log(data);
    
})

emitter.on("lgout", (dta)=>{
    console.log(dta.text);
    
})

emitter.emit("msg",  "User logged")
emitter.emit("msg", "user went to about page")
emitter.emit("msg",  "User logout")




