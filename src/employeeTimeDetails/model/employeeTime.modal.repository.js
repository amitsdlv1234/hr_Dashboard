const employeeTime = require('./employeeTime.modal');
const BaseRepository = require('../../../services/database/main/BaseRepository');
const e = require('express');

class employeeTimeRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkemployeeTimeExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await employeeTime.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If employeeTime is not found, return null
      }
    } catch (error) {
      console.error('Error checking employeeTime existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = employeeTimeRepository; // Export the class
