const express=require("express");
const dotenv=require("dotenv");
const { connection } = require("mongoose");
dotenv.config()

const app=express();

//connection
connectionDB=require


const port=process.env.port

app.use()

app.get("/",(req,res)=>{
res.send(" get method called")
})

app.listen(port,()=>{
    console.log("my server is running on port",port)
})