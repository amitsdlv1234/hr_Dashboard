const User = require('./auth.modal');
const BaseRepository = require('../../../services/database/main/BaseRepository');
const e = require('express');

class UserRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkUserExists(data) {
    try {
      let user;
      if (data&&typeof data === 'number') {
        // If data is a number, assume it's a phone number
        user = await User.findOne({
          where: {
            phoneNumber: data
          }
        });
      } else if (data&&typeof data === 'string') {
        // If data is a string, check if it's an email or phone number
        if (data.includes('@')) {
          // If it contains '@', assume it's an email
          user = await User.findOne({
            where: {
              emailId: data
            }
          });
        } 
      } else {
        // Handle other data types if needed
        throw new Error('Unsupported data type');
      }
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If user is not found, return null
      }
    } catch (error) {
      console.error('Error checking user existence:', error);
      throw error; // Throw error for handling in the calling function
    }
  }
  async emailIdPhoneVeriStatus(data){
    try {
      let user;
      console.log(data);
      if (data&&typeof data === 'number') {
        user=await User.update({ isVerifiedMobile: true } ,{ where: { phoneNumber: data } });
        
      } else if (data&&typeof data === 'string') {
        // If data is a string, check if it's an email or phone number
        if (data.includes('@')) {
          // If it contains '@', assume it's an email
          user = await User.findOne({
            where: {
              emailId: data
            }
          });
          user=await User.update({ isVerifiedEmail: true } ,{ where: {emailId: data } })
        } 
      } else {
        // Handle other data types if needed
        throw new Error('Unsupported data type');
      }
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If user is not found, return null
      }
    } catch (error) {
      console.error('Error user updatetion :', error);
      throw error; // Throw error for handling in the calling function
    }
  }
}

module.exports = UserRepository; // Export the class
