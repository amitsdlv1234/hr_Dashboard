const UserAddressProofDetails = require('./userAddressProof.modal');
const BaseRepository = require('../../../services/database/main/BaseRepository');
const e = require('express');

class UserAddressProofDetailsRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkUserAddressProofDetailsExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await UserAddressProofDetails.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If UserAddressProofDetails is not found, return null
      }
    } catch (error) {
      console.error('Error checking UserAddressProofDetails existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = UserAddressProofDetailsRepository; // Export the class
