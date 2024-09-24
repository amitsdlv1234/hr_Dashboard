const expense = require('./expense.modal');
const BaseRepository = require('../../../../services/database/main/BaseRepository');
const e = require('express');

class expenseRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkexpenseExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await expense.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If expense is not found, return null
      }
    } catch (error) {
      console.error('Error checking expense existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = expenseRepository; // Export the class
