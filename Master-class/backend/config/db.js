const mongoose = require("mongoose")

const DbConnect=async()=>{
    try {
        const connect = await mongoose.connect(process.env.mongo_url)
        console.log("database conneted")
        
    } catch (error) {
        console.log("error",error)
    }
}
module.exports=DbConnect