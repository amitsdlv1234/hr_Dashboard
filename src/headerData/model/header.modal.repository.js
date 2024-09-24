const UserPrimaryDetails = require('../model/userPrimary.modal');
const BaseRepository = require('../../../services/database/main/BaseRepository');
const e = require('express');

class UserPrimaryDetailsRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkUserPrimaryDetailsExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await UserPrimaryDetails.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If UserPrimaryDetails is not found, return null
      }
    } catch (error) {
      console.error('Error checking UserPrimaryDetails existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = UserPrimaryDetailsRepository; // Export the class
