const employeeResign = require('./emlpoyeeResign.modal');
const BaseRepository = require('../../../services/database/main/BaseRepository');

class employeeResignRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkemployeeResignExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await employeeResign.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If employeeResign is not found, return null
      }
    } catch (error) {
      console.error('Error checking employeeResign existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = employeeResignRepository; // Export the class
