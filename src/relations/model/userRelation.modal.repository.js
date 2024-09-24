const UserRelationDetails = require('../model/userRelation.modal');
const BaseRepository = require('../../../services/database/main/BaseRepository');
const e = require('express');

class UserRelationDetailsRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkUserRelationDetailsExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await UserRelationDetails.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If UserRelationDetails is not found, return null
      }
    } catch (error) {
      console.error('Error checking UserRelationDetails existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = UserRelationDetailsRepository; // Export the class
