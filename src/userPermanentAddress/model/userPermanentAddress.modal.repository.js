const UserPermanentAddressDetails = require('../model/userPermanentAddress.modal');
const BaseRepository = require('../../../services/database/main/BaseRepository');
const e = require('express');

class UserPermanentAddressDetailsRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkUserPermanentAddressDetailsExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await UserPermanentAddressDetails.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If UserPermanentAddressDetails is not found, return null
      }
    } catch (error) {
      console.error('Error checking UserPermanentAddressDetails existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = UserPermanentAddressDetailsRepository; // Export the class
