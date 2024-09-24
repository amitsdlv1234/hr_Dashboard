const assetsReplacementReq = require('./assetsReplacementReq.modal');
const BaseRepository = require('../../../services/database/main/BaseRepository');
const e = require('express');

class assetsReplacementReqRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkassetsReplacementReqExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await assetsReplacementReq.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If assetsReplacementReq is not found, return null
      }
    } catch (error) {
      console.error('Error checking assetsReplacementReq existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = assetsReplacementReqRepository; // Export the class
