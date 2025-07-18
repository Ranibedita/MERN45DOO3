const User = require("../models/user.model");
const bcrypt=require("bcrypt")

exports.Register = async (req, res) => {

    try {
        const { fullName, age, email, password,phoneNumber } = req.body;

        if(!fullName||!email||!password){
            return res.send({status:false,message:"please fill all the fields"})  

        }

        
        const existUser = await User.findOne({ email });

        if (existUser) {
            return res.send({status:false,message:"user already exist"})  
        }


        bcrypt.hash(Password,9,  function(err, hash) {
            
    
});

        const user = new User({
            fullName:fullName,
            email:email,
            password:password,
            phoneNumber:phoneNumber,
        });


        const result = await user.save();
        
        return res.send(result);


    } catch (error) {
        return res.send({status:false,message:"registaration faild"})  
    }

};