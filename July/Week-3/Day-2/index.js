const express=require("express");
const router=require("./routes/allRoutes");
const connectDB=require("./config/db");

const app=express();
const port= 7000;

connectDB()
app.use("/api",router);

app.listen(port,()=>{
    console.log("my server is running on port",port)
})