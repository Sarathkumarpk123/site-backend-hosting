const User =require("./models/userModel");
var jwt = require('jsonwebtoken');
const login =async(req,res)=>{

    const{email,password}=req.body
    const user=await User.findOne({email:email}).exec();
   { if(user){
        return res.status(401).send
        ("unauthorised acces")
    }
        const passwordMatch= bcrypt.compareSync
    }
    if(passwordMatch){
        token = jwt.sign({id:user.id,email:user.email,name:user.name }, '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611');
        res.cookie("token",token,{httpOnly:true,maxAge:1*60*60*1000})
        res.status(200).send(token)
    }
    else{
        res.status(401).send("unauthorised acces")
    }
}
module.exports={
    login
}