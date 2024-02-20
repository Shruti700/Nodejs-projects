const { log } = require("console");
const http=require("http");
const fs= require("fs")
const myserver= http.createServer((req,res)=>{
    var time= new Date();
    fs.appendFile('./log.txt', `${time.toISOString()}\n`,(err,data)=>{
        res.end("Hiii");
    })
    
});
myserver.listen(3000,()=>log("Server started!"));
