const UserCurrentAddressDetails = require('./userCurrentAddress.modal');
const BaseRepository = require('../../../services/database/main/BaseRepository');
const e = require('express');

class UserCurrentAddressDetailsRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkUserCurrentAddressDetailsExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await UserCurrentAddressDetails.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If UserCurrentAddressDetails is not found, return null
      }
    } catch (error) {
      console.error('Error checking UserCurrentAddressDetails existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = UserCurrentAddressDetailsRepository; // Export the class
