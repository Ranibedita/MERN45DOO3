const mongoose=require("mongoose")

const connectDB=async ()=>{
    try{
        const connection=await mongoose.connect("mongodb://127.0.0.1:27017/MyPracticeDB");
        console.log("DB connected")
        await userModel.insertOne({name:"xyz",age:23,gmail:"nibedita@gmail.com",password:"nibedita@123"})
        // await userModel.updateOne({_id:ObjectId('6875e8520795dbc25eccd7a0')})
        console.log("data updated properly");  
    } catch(error){
        console.log("error ",error)
    }

}

const userSchema=mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    password:String
},{
    versionKey:false
})

const userModel=mongoose.model("user",userSchema);
module.exports=userModel
module.exports=connectDB;