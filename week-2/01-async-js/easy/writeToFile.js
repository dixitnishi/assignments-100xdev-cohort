// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require("fs");
let data  = "Updated a1";

console.log("starting the write ops "+Date.now());
fs.writeFile("a1.txt",data,(err) => {
    if(err){
        console.log(error);
    }
    else{
        console.log(Date.now())
        console.log("reading updates")
        fs.readFile("a1.txt","utf-8",(err,data)=>{
            console.log(Date.now());
            console.log(data)
        })
    }
});