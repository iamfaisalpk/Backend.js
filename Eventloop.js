console.log("start");

setTimeout(()=>{
    console.log("Macrotask - Timout");
},0)

Promise.resolve().then (()=>{
    console.log("MicroTask - Promise");
})

console.log("End");

