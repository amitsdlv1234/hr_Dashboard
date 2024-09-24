const HashService=require("../../../services/hash/hash");
const User = require("../../userAuth/modal/auth.modal");

exports.docAuthorization=async(req,res,next)=>{
    try {
      let token=req.headers.authorization;
      if(token){
        token=token.slice(7);
        const hashService=new HashService();
        const userData=token.split(".")
        console.log("userdata",userData);
      let decryptData=await hashService.way2decryptData(userData[0]);
      let decryptTime=await hashService.way2decryptData(userData[1]);
      let currentTimeInMilliseconds = new Date().getTime();
      const userKey=decryptData.emailId;
  
      const userAuth=await User.findOne({where:{emailId:userKey}});
      console.log(currentTimeInMilliseconds," ",currentTimeInMilliseconds-decryptTime," ",(currentTimeInMilliseconds-decryptTime)/60000);
      if(userAuth){
        if(((currentTimeInMilliseconds-decryptTime)/60000)<=180){
           req.params={userId:userKey};
          next();
         }
          else{
             res.status(201).json({msg:"Time Out"})
          }
      }
      else{
        res.status(201).json({message:"User not present"})
      }
      }else res.status(401).json({message:"Unauthorized user"})
        
    } catch (error) {
      console.log(error);
      res.status(500).json({message:"Token incorrect"});
    }
  }