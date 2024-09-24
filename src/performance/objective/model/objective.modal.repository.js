const myObjective = require('./objective.modal');
const BaseRepository = require('../../../../services/database/main/BaseRepository');
const e = require('express');

class myObjectiveRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkmyObjectiveExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await myObjective.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If myObjective is not found, return null
      }
    } catch (error) {
      console.error('Error checking myObjective existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = myObjectiveRepository; // Export the class
