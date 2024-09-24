const otpGenerator = require('otp-generator');
const UserRepository = require('./modal/auth.modal.repository');
const HashService = require('../../services/hash/hash');
const AuthService = require('./services/auth.login.services');
const AuthServiceLoggedIn = require('./services/auth.loggedin.services');
const UserService = require('./auth.usecases');
const bcrypt = require('bcrypt');
const dotenv=require('dotenv');
dotenv.config();
const key=process.env.SECRETKEY;




exports.login = async (req, res) => {
    try {
        const user = req.body;
        const authService = new AuthService();
        const result = await authService.login(user);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.signIn = async (req, res) => {
    try {
        const user = req.body;
        console.log(user)
        if(!user) return res.status(201).json("Please provide user information");
        const authService = new AuthService();
        const result = await authService.signIn(user);
        console.log("reslt",result)
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.accountVerfy=async(req,res)=>{
     try {
        const userService=new UserService();
        const hashService=new HashService();
        const user=req.body;
        let data = req.headers.authorization;
        if(data){
            data = (req.headers.authorization).slice(7);
            //    console.log("trim",token.slice(7));
                const decryptData=JSON.parse(await hashService.way2decryptData(data,key));
                const {phoneNumber,emailId}=decryptData;
                console.log(phoneNumber,emailId);
                let result;
                if(user.emailId===true){
                   result =await userService.accountVerification(null,emailId);
                }
                 else if(user.phoneNumber===true){
                    result =await userService.accountVerification(phoneNumber,null);
                 }
                console.log(result);
                res.status(200).json(result); 
        }
        else{
            res.status(401).json({message:"unauthorized user"})
        }
     } catch (error) {
        res.status(500).json({ error: error.message });
     }
}
exports.otpVerify=async(req,res)=>{
    try {
       const {userOtp}=req.body;
       const userService=new UserService();
       const hashService=new HashService();
       const token = (req.headers.authorization).slice(7);
       if(token){
        console.log("trim",token.trim());
        const userData=token.split(".")
          console.log("userdata",userData);
        const decryptData=JSON.parse(await hashService.way2decryptData(userData[0],key));
        const decryptTime=await hashService.way2decryptData(userData[1],key);
        const decryptOtp=parseInt(await hashService.way2decryptData(userData[2],key));
        const currentTimeInMilliseconds = new Date().getTime();
        console.log("decry00",decryptData,"decreptOtp",decryptOtp,"loggedEmail",decryptData.loggedInEmail,"loggedInMobile",decryptData.loggedInMoblie);
        console.log((currentTimeInMilliseconds-decryptTime)/60000);
        if(decryptOtp===userOtp){
         if(((currentTimeInMilliseconds-decryptTime)/60000)<=120){
          const userRepository=new UserRepository();
          if(decryptData.loggedInEmail){
            // await userRepository.emailIdPhoneVeriStatus(decryptData.emailId);
            res.status(200).json({msg:" email Otp Verified",token:token})
          }
          else if(decryptData.loggedInMoblie){
            // await userRepository.emailIdPhoneVeriStatus(decryptData.phoneNumber);
            decryptData.isVerifiedMobile=true;
            console.log("amit",decryptData)
            const encryptedData = await hashService.way2encryptData(JSON.stringify(decryptData),key);
            const encryptTime = await hashService.way2encryptData(Date.now(),key)
          res.status(200).json({msg:"Phone Otp Verified",token:encryptedData + "." + encryptTime})
          }
         }
          else{
             res.status(201).json({msg:"Time Out"})
          }
        }
        else{
         res.status(200).json({msg:"Otp not correct"});
        }
        
       }
       else{
        res.status(401).json({message:"unauthorized user"})
    }
       
    } catch (error) {
       res.status(500).json({ error: error.message });
    }
}
exports.loggedIn = async (req, res) => {
    try {
        const { hash, otp, phoneNumber , isValidReq } = req.body;
        const authServiceLoggedIn = new AuthServiceLoggedIn();
        const result = await authServiceLoggedIn.verifyLogin(hash, otp, phoneNumber,isValidReq);
        
        if (result.success) {
            
            if (result?.accessToken) {
                return res.status(200).json({ message: 'Logged in successfully',result });
            }
            return res.status(200).json({ message: 'Logged in successfully' });
        } else {
            return res.status(401).json({ message: 'Logged in failed' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.passwordLogin = async (req, res) => {
    try {
        const { password } = req.body;
        const hashService = new HashService();
        const token = (req.headers.authorization).slice(7);
        if(token){
            const userData = token.split(".");
            console.log(userData,password);
        const decryptData = await hashService.way2decryptData(userData[0],key);
        console.log("passwordLogin",decryptData)
        if (!decryptData || !decryptData.password) {
            return res.status(400).json({ msg: "Invalid token" });
        }
        
        const savedHashedPassword = decryptData.password;
        console.log(savedHashedPassword);
        const isPasswordMatch = await bcrypt.compare(password, savedHashedPassword);
        
        if (isPasswordMatch) {
            res.status(200).json(token);
        } else {
            res.status(401).json({ msg: "Password incorrect" });
        }
        }
        else{
            res.status(401).json({message:"unauthorized user"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}
exports.changePassword=async(req, res)=>{
    try {
        const {newPassword}=req.body;
        const {emailId}=req.body;
        console.log(emailId,newPassword);
            const userService=new UserService();
            const update=await userService.updatepassword(newPassword,emailId);
            if(update){
                res.status(201).json({message:"Password Updated"});
            }else res.status(201).json({message:"Password not Updated"});
       
        
    } catch (error) {
        console.log(error);
        res.status(201).json({message:"Password Updated ! Internal server error in ChangePassword api"});
    }
}
exports.createPassword=async(req,res)=>{
    try {
        const {password}=req.body;
        const userService=new UserService();
       const hashService=new HashService();
       const token = (req.headers.authorization).slice(7);
       if(token){
        console.log("trim",token.trim());
        const userData=token.split(".")
          console.log("userdata",userData);
        const decryptData=JSON.parse(await hashService.way2decryptData(userData[0],key));
        const decryptTime=await hashService.way2decryptData(userData[1],key);
        const currentTimeInMilliseconds = new Date().getTime();
        console.log("decry00",decryptData,"loggedEmail",decryptData.loggedInEmail,"loggedInMobile",decryptData.loggedInMoblie);
        console.log((currentTimeInMilliseconds-decryptTime)/60000);
        
         if(((currentTimeInMilliseconds-decryptTime)/60000)<=120){
          const userRepository=new UserRepository();
          if(decryptData.loggedInEmail){
           const result= await userService.addData({...decryptData,password:password});
           const newToken=await hashService.way2encryptData(JSON.stringify(result),key);
            res.status(200).json({token:newToken});
          }
          else if(decryptData.loggedInMoblie){
            const result= await userService.addData({...decryptData,password:password});
            // const encryptedOtp = await hashService.way2encryptData(JSON.stringify(otp),key);
            const newToken=await hashService.way2encryptData(JSON.stringify(result),key);
            const encryptTime = await hashService.way2encryptData(Date.now(),key);
            res.status(200).json({tokel:newToken + "." + encryptTime});
          }
         }
          else{
             res.status(201).json({msg:"Time Out"})
          }
        
       }
       else{
        res.status(401).json({message:"unauthorized user"})
    }
       
        
    } catch (error) {
        console.log(error);
        res.status(201).json({message:"! Internal server error in ChangePassword api"});
    }
}


