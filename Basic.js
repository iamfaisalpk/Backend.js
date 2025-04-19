const path =  require("path")
const fs =  require("fs");

const user = "faisal" ; 

// fs.writeFile(path.join(__dirname, "/API", "api.txt"), `UserName : Iam ${user}`,(err)=>{
//     if(err) throw err;
// })


fs.appendFile(path.join(__dirname, "/API", "api.txt"), `\n UserName : ${user}`, (error)=>{
    if (error) throw error;
})

