const UserEducationDetails = require('./userEducation.modal');
const BaseRepository = require('../../../services/database/main/BaseRepository');
const e = require('express');

class UserEducationDetailsRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkUserEducationDetailsExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await UserEducationDetails.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If UserEducationDetails is not found, return null
      }
    } catch (error) {
      console.error('Error checking UserEducationDetails existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = UserEducationDetailsRepository; // Export the class
