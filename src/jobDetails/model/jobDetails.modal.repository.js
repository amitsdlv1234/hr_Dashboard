const employeejobDetail = require('./jobDetails.modal');
const BaseRepository = require('../../../services/database/main/BaseRepository');

class employeejobDetailRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkemployeejobDetailExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await employeejobDetail.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If employeejobDetail is not found, return null
      }
    } catch (error) {
      console.error('Error checking employeejobDetail existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = employeejobDetailRepository; // Export the class
