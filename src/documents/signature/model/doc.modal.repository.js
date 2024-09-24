const doc = require('../model/doc.modal');
const BaseRepository = require('../../../../services/database/main/BaseRepository');
const e = require('express');

class docRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkdocExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await doc.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If doc is not found, return null
      }
    } catch (error) {
      console.error('Error checking doc existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = docRepository; // Export the class
