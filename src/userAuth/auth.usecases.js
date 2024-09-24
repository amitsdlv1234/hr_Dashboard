// auth.service.js
const HashService = require('../../services/hash/hash');
const UserRepository = require('./modal/auth.modal.repository');
const User = require('./modal/auth.modal');
const bcrypt = require('bcrypt'); 
const Sequelize =require('sequelize');
const dotenv=require('dotenv');
const key =process.env.SECRETKEY; 

class UserService {
    async addData(user) {
        try {
           if(!user) return "Provide User information"

          
           const hashService = new HashService();
           // Hash the password
          const hashPassword = await bcrypt.hash(user.password, 10);
           console.log("addData pass",hashPassword);
              user.password=hashPassword;
              console.log("addData",user);
              const newuser=await User.create(user);
              if(newuser){
                return newuser;
              }
              else{
                return "user data not updated";
              }
        } catch (err) {
            console.error('Error:', err);
            throw new Error('Internal server error during addData. Please try again later.');
        }
    }
async accountVerification(phoneNumber,emailId){
    try {
        const hashService = new HashService();
        const userRepository=new UserRepository();
        console.log(phoneNumber,emailId);
        if (phoneNumber) {
        
            const signInMobile = await userRepository.checkUserExists(phoneNumber);
      
            if (!signInMobile) {
              return { msg: "Mobile number is not registered" };
            }
      
            const mobileIsVerified = signInMobile.isVerifiedMobile;
            console.log("Mobile is verified:", mobileIsVerified);
      
            if (mobileIsVerified) {
              return { msg: "Mobile number is already verified" };
            }
            // OTP generation for mobile
            const otp = await hashService.genrateOTP();
            const encryptedData = await hashService.way2encryptData(JSON.stringify(signInMobile),key);
            const encryptTime = await hashService.way2encryptData(Date.now(),key);
            const encryptedOtp = await hashService.way2encryptData(JSON.stringify(otp),key);
            if (encryptedData && encryptTime) {
                const concatenatedString = encryptedData + "." + encryptTime;
                return {berry: encryptedData + "." + encryptTime+"."+encryptedOtp,otp:otp};
            } else {
                throw new Error('Error encrypting data');
            }
        }else if (emailId) {
            const signInEmail = await userRepository.checkUserExists(emailId);
      
            if (!signInEmail) {
              return res.status(404).json({ msg: "Email is not registered" });
            }
      
            const emailIsVerified = signInEmail.isVerifiedEmail;
            console.log("Email is verified:", emailIsVerified);
      
            if (emailIsVerified) {
              return res.status(201).json({ msg: "Email is already verified" });
            }
            // OTP generation
            const otp = await hashService.genrateOTP();
            const encryptedData = await hashService.way2encryptData(JSON.stringify(signInEmail),key);
            const encryptTime = await hashService.way2encryptData(Date.now(),key);
            const encryptedOtp = await hashService.way2encryptData(JSON.stringify(otp),key);
            if (encryptedData && encryptTime) {
                const concatenatedString = encryptedData + "." + encryptTime;
                return {berry: encryptedData + "." + encryptTime+"."+encryptedOtp,otp:otp};
            } else {
                throw new Error('Error encrypting data');
            }
        }
    } catch (error) {
        console.log(error);
       return { msg: "ERROR in accountVerifiaction", error: error.message };
}
}
async updatepassword(newPassword,userId){
  try {
    const hashService=new HashService();
    const hashPassword = await bcrypt.hash(newPassword, 10);
    const userUpdate = await User.update({password:hashPassword},{where:{emailId:userId}});
    if(userUpdate)
    return userUpdate;
  else return null;
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"error during update password"});
  }
}
}
module.exports =UserService;
