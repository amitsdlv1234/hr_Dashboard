const employeeLeaveReq = require('./employeeLeaveReq.modal');
const BaseRepository = require('../../../services/database/main/BaseRepository');
const e = require('express');

class employeeLeaveReqRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkemployeeLeaveReqExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await employeeLeaveReq.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If employeeLeaveReq is not found, return null
      }
    } catch (error) {
      console.error('Error checking employeeLeaveReq existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = employeeLeaveReqRepository; // Export the class
