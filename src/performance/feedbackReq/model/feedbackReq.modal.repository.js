const feedbackReq = require('./feedbackReq.modal');
const BaseRepository = require('../../../../services/database/main/BaseRepository');
const e = require('express');

class feedbackReqRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkfeedbackReqExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await feedbackReq.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If feedbackReq is not found, return null
      }
    } catch (error) {
      console.error('Error checking feedbackReq existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = feedbackReqRepository; // Export the class
