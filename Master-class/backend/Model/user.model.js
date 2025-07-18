const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
         type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    dob:{
        type:Date
    },
    phoneNumber:{
        type:String
    }

})

const userModel=mongoose.Model("users",userSchema)

module.exports=userModel