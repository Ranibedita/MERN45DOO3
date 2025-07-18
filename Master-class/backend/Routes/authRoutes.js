const express =require("express")

const {Register}=require("../controller/auth.controller");

const authRoutes= express.Router()

authRoutes.post("/register",Register);

module.exports=authRoutes