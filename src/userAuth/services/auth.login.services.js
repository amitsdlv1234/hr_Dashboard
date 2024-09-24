// auth.service.js
const UserRepository = require('../modal/auth.modal.repository');
const HashService = require('../../../services/hash/hash');
const messagingService = require('../messaging.handler');
 const UserService = require('../auth.usecases') 
 const dotenv=require("dotenv");
 const key=process.env.SECRETKEY;
class AuthService {
    async login(user) {
        try {
            let userId;
            const hashService = new HashService();
            const userRepository = new UserRepository();
            const phoneNumber=user.phoneNumber;
            const emailId=user.emailId;
            let loggedInMoblie=false;
            let loggedInEmail=false;
            console.log("phone",phoneNumber,"email",emailId);
            if (phoneNumber) {
                userId = await userRepository.checkUserExists(phoneNumber);
                if(!userId) {
                    return "User not registered with this mobile number";
                  }
                userId=userId.dataValues
                 if(userId.isVerifiedMobile){
                    console.log("2",userId);
                    const encryptedData = await hashService.way2encryptData({...userId,loggedInMoblie:true},key);
                    const encryptTime = await hashService.way2encryptData(Date.now(),key);
                    if (encryptedData && encryptTime) {
                        return { message: "Enter your Password",token: encryptedData + "." + encryptTime};
                   }
                  }
                else{
                    const otp = await hashService.genrateOTP();
                    //   userId.otp=otp;
                    //   console.log(JSON.stringify(userId));
                    const encryptedOtp = await hashService.way2encryptData(JSON.stringify(otp),key);
                    const encryptedData = await hashService.way2encryptData(JSON.stringify({...userId,loggedInMoblie:true}),key);
                    const encryptTime = await hashService.way2encryptData(Date.now(),key);
                
                //Message carrier
                /*
                const messagingService = new MessagingService();
                await messagingService.sendOTP(phoneNumber, otp);
                */
                 console.log("opt",otp)

                if (encryptedData && encryptTime&&encryptedOtp) {
                    const concatenatedString = encryptedData + "." + encryptTime;
                    return {berry: encryptedData + "." + encryptTime+"."+encryptedOtp ,otp:otp};
                } else {
                    throw new Error('Error encrypting data');
                }
               }
            }
           else if(emailId){
            console.log("phone",phoneNumber,"email",emailId);
            userId = await userRepository.checkUserExists(emailId);
            if(!userId) {
                return "User not registered with this emailId";
              }
            userId=userId.dataValues
             if(userId.isVerifiedEmail){
                console.log("emailIdLogin",userId);
                const encryptedData = await hashService.way2encryptData({...userId,loggedInEmail:true},key);
                const encryptTime = await hashService.way2encryptData(Date.now(),key);
                if (encryptedData && encryptTime) {
                    return { message: "Enter your Password",token: encryptedData + "." + encryptTime};
               }
              }
            else{
                const otp = await hashService.genrateOTP();
                //   userId.otp=otp;
                //   console.log(JSON.stringify(userId));
                const encryptedOtp = await hashService.way2encryptData(JSON.stringify(otp),key);
                const encryptedData = await hashService.way2encryptData(JSON.stringify({...userId,loggedInEmail:true}),key);
                const encryptTime = await hashService.way2encryptData(Date.now(),key);
            
            //Message carrier
            /*
            const messagingService = new MessagingService();
            await messagingService.sendOTP(phoneNumber, otp);
            */
             console.log("opt",otp)

            if (encryptedData && encryptTime&&encryptedOtp) {
                const concatenatedString = encryptedData + "." + encryptTime;
                return {berry: encryptedData + "." + encryptTime+"."+encryptedOtp ,otp:otp};
            } else {
                throw new Error('Error encrypting data');
            }
           }}
        } catch (err) {
            console.error('Error:', err);
            throw new Error('Internal server error. Please try again later.');
        }
    }

    // signIn 
    async signIn(user) {
        try {
            let userId;
            const hashService = new HashService();
            const userRepository = new UserRepository();
            const phoneNumber=user.phoneNumber;
            const emailId=null;
            let loggedInMoblie=false;
            let loggedInEmail=false;
            console.log("phone",phoneNumber,"email",emailId);
            if (phoneNumber) {
                userId = await userRepository.checkUserExists(phoneNumber);
                if(userId) {
                    return "User already registered with this mobile number";     
                }
                else{
                    const otp = await hashService.genrateOTP();
                    //   userId.otp=otp;
                    //   console.log(JSON.stringify(userId));
                    const encryptedOtp = await hashService.way2encryptData(JSON.stringify(otp),key);
                    const encryptedData = await hashService.way2encryptData(JSON.stringify({...user,loggedInMoblie:true}),key);
                    const encryptTime = await hashService.way2encryptData(Date.now(),key);
                
                //Message carrier
                /*
                const messagingService = new MessagingService();
                await messagingService.sendOTP(phoneNumber, otp);
                */
                 console.log("opt",otp)

                if (encryptedData && encryptTime&&encryptedOtp) {
                    const concatenatedString = encryptedData + "." + encryptTime;
                    return {berry: encryptedData + "." + encryptTime+"."+encryptedOtp ,otp:otp};
                } else {
                    throw new Error('Error encrypting data');
                }
               }
            }
           else if(emailId){
            console.log("phone",phoneNumber,"email",emailId);
            userId = await userRepository.checkUserExists(emailId);
            if(userId) {
                return "User already registered with this emailId";
              }
            else{
                const otp = await hashService.genrateOTP();
                //   userId.otp=otp;
                //   console.log(JSON.stringify(userId));
                const encryptedOtp = await hashService.way2encryptData(JSON.stringify(otp),key);
                const encryptedData = await hashService.way2encryptData(JSON.stringify({...user,loggedInEmail:true}),key);
                const encryptTime = await hashService.way2encryptData(Date.now(),key);
            
            //Message carrier
            /*
            const messagingService = new MessagingService();
            await messagingService.sendOTP(phoneNumber, otp);
            */
             console.log("opt",otp)

            if (encryptedData && encryptTime&&encryptedOtp) {
                const concatenatedString = encryptedData + "." + encryptTime;
                return {berry: encryptedData + "." + encryptTime+"."+encryptedOtp ,otp:otp};
            } else {
                throw new Error('Error encrypting data');
            }
           }}
        } catch (err) {
            console.error('Error:', err);
            throw new Error('Internal server error. Please try again later.');
        }
    }
}



module.exports = AuthService;
