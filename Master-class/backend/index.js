const express = require("express")
const dotenv= require("dotenv")
const DbConnect=require("../backend/config/db");
const routes = require("./Routes/allRoutes");

const app= express();
dotenv.config();
DbConnect();
const port= process.env.port;

app.get("/",(req,res)=>{
    res.send("wellcome to user management system ")
})

app.use("/api",routes)

app.listen(port,()=>{
    console.log("backend is running on port",port)
})