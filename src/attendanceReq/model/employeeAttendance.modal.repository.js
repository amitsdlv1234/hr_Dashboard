const employeeAttendance = require('./employeeAttendance.modal');
const BaseRepository = require('../../../services/database/main/BaseRepository');
const e = require('express');

class employeeAttendanceRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkemployeeAttendanceExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await employeeAttendance.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If employeeAttendance is not found, return null
      }
    } catch (error) {
      console.error('Error checking employeeAttendance existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = employeeAttendanceRepository; // Export the class
