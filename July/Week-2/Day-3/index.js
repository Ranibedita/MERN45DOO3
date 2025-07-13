// //to import the package
// const http=require("http")
// const port=9000;


// // this is the server creation
// const myServer=http.createServer((req,res)=>{
//  console.log("request is accepted");
//    res.end("<h1>this is my response</h1>")
// })


// // to run the server
// myServer.listen(port,()=>{
//  console .log("my server is running on port",port)
   
// })


const express=require("express");
const app =express();
const port=9000;

app.get("/",(req,res)=>{
    console.log("request accepted")
    res.send("response sended");
})


//post method call
app.post("/user",(req,res)=>{
    console.log("request accepted")
    res.send("response post")
})



// to run the server
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})