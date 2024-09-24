const HashService=require("../services/hash/hash");
const User = require("../src/userAuth/modal/auth.modal");

const { SECREAT_TOKEN_FOR_JWT } = require("../utils/envVariables");
const { verify } = require("jsonwebtoken");
exports.AuthenticationTokenVerifyMiddleWare = async (req, res, next) => {
  try {
    const getToken = req.headers['authorization'].split(" ")[1];
    const data = await verify(getToken, SECREAT_TOKEN_FOR_JWT);
    req.user = {user_id:data.user_id , email:data.email};
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token expired." });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Token not valid." });
    } else {
      return res.status(401).json({ error: error.name });
    }
  }
};
// exports.authorization = async (req, res, next) => {
//   try {
//       let token = req.headers.authorization;
//       if (token) {
//           token = token.slice(7);
//           const hashService = new HashService();
//           const userData = token.split(".");
//           console.log("userdata", userData);
//           let decryptData = await hashService.way2decryptData(userData[0]);
//           let decryptTime = await hashService.way2decryptData(userData[1]);
//           let currentTimeInMilliseconds = new Date().getTime();
//           let userKey;

//           if (typeof decryptData === 'object') {
//               // If decryptData is already an object, assign its properties directly
//               userKey = decryptData.emailId;
//           } else {
//               // If decryptData is not parsed, parse it
//               decryptData = JSON.parse(decryptData);
//               userKey = decryptData.emailId;
//           }

//           console.log("decryptedData", decryptData, "userKey", userKey);
//           const userAuth = await User.findOne({ where: { emailId: userKey } });
//           console.log(currentTimeInMilliseconds, " ", currentTimeInMilliseconds - decryptTime, " ", (currentTimeInMilliseconds - decryptTime) / 60000);
//           if (userAuth) {
//               if (((currentTimeInMilliseconds - decryptTime) / 60000) <= 180) {
//                   req.body = { ...req.body, userId: userKey,name:decryptData.name };
//                   next();
//               } else {
//                   res.status(201).json({ msg: "Time Out" });
//               }
//           } else {
//               res.status(201).json({ message: "User not present" });
//           }
//       } else res.status(401).json({ message: "Unauthorized user" });

//   } catch (error) {
//       console.log(error);
//       res.status(500).json({ message: "Token incorrect" });
//   }
// };
exports.authorization= async (req, res, next) => {
  try {
      let token = req.headers.authorization;
      if (token) {
          token = token.slice(7);
          const hashService = new HashService();
          const userData = token.split(".");
          console.log("userdata", userData);
          let decryptData = await hashService.way2decryptData(userData[0]);
          let decryptTime = await hashService.way2decryptData(userData[1]);
          let currentTimeInMilliseconds = new Date().getTime();
          let userKey;

          if (typeof decryptData === 'object') {
              // If decryptData is already an object, assign its properties directly
              userKey = decryptData.emailId;
          } else {
              // If decryptData is not parsed, parse it
              decryptData = JSON.parse(decryptData);
              userKey = decryptData.emailId;
          }

          console.log("decryptedData", decryptData, "userKey", userKey);
          const userAuth = await User.findOne({ where: { emailId: userKey } });
          console.log(currentTimeInMilliseconds, " ", currentTimeInMilliseconds - decryptTime, " ", (currentTimeInMilliseconds - decryptTime) / 60000);
          if (userAuth) {
              if (((currentTimeInMilliseconds - decryptTime) / 60000) <= 180) {
                  req.body = { ...req.body, userId: userKey, name: decryptData.name };
                  if (userAuth.role === "admin") {
                      next();
                  } else {
                      if (req.method === 'GET') {
                          next();
                      } else {
                          res.status(403).json({ message: "Access denied. You are not an admin." });
                      }
                  }
              } else {
                  res.status(401).json({ msg: "Time Out" });
              }
          } else {
              res.status(404).json({ message: "User not present" });
          }
      } else {
          res.status(401).json({ message: "Unauthorized user" });
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Token incorrect" });
  }
};


exports.auth=async(req,res,next)=>{
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
    const emailId=decryptData.emailId;
    const phoneNumber=decryptData.phoneNumber;
    const userAuth=await User.findOne({where:{emailId:emailId}});
    console.log(currentTimeInMilliseconds," ",currentTimeInMilliseconds-decryptTime," ",(currentTimeInMilliseconds-decryptTime)/60000);
    console.log(userAuth);
    if(userAuth){
      if(((currentTimeInMilliseconds-decryptTime)/60000)<=180){
         req.body={...req.body,emailId:emailId,phoneNumber:phoneNumber};
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