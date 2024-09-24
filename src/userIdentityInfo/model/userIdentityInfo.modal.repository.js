const UserIdentityInfoDetails = require('./userIdentityInfo.modal');
const BaseRepository = require('../../../services/database/main/BaseRepository');
const e = require('express');

class UserIdentityInfoDetailsRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkUserIdentityInfoDetailsExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await UserIdentityInfoDetails.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If UserIdentityInfoDetails is not found, return null
      }
    } catch (error) {
      console.error('Error checking UserIdentityInfoDetails existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = UserIdentityInfoDetailsRepository; // Export the class
