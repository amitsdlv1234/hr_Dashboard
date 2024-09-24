const crypto = require("crypto");
const CryptoJS = require('crypto-js');
const dotenv =require('dotenv');
dotenv.config();
const key=process.env.SECRETKEY;
const HashService = class HashService {

    async genrateOTP() {
        const otp = crypto.randomInt(10000, 99999);
        return otp;
    }

    async hashData(data) {
        try {
            console.log("add in hashData",data)
            const hashedData = crypto.createHmac('sha256',key).update(data).digest('hex');
            // console.log(hashedData);
            return hashedData
        }
        catch (err) {
            console.log(err);
        }
    }

    async deHashData(data) {
        try {
            console.log(process.env.SECRETKEY);
            const dehashedData = crypto.createHmac('sha256',key)
                .update(data)
                .digest('hex');
            return dehashedData;
        }
        catch (err) {
          return err;
        }
    }
     way2encryptData = (data) => {
        try {
            const jsonData = JSON.stringify(data);
            console.log("key",key);
            const encryptedData = CryptoJS.AES.encrypt(jsonData, key).toString();
            console.log(encryptedData);

            return encryptedData;
        } catch (error) {
            console.error('Error encrypting data:', error);
            return null;
        }
    };
    // Function to decrypt data
    way2decryptData = (encryptedData) => {
        try {
            console.log(encryptedData);
            console.log("key",key);
            const decryptedBytes = CryptoJS.AES.decrypt(encryptedData,key);
            const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
            console.log("decryptedData",decryptedData);
            
            let decryptedJSON;
            if (typeof decryptedData === 'object') {
                // If the decrypted data is already an object, no need to parse it
                decryptedJSON = decryptedData;
            } else {
                // Remove padding and parse JSON
                decryptedJSON = JSON.parse(decryptedData);
            }
            
            console.log("decryptedJSON", decryptedJSON);
            return decryptedJSON;
        } catch (error) {
            console.error('Error decrypting data:', error);
            return error;
        }
    };
    
};



module.exports = HashService;
