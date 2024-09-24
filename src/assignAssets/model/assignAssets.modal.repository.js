const assignAssets = require('./assignAssets.modal');
const BaseRepository = require('../../../services/database/main/BaseRepository');
const e = require('express');

class assignAssetsRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkassignAssetsExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await assignAssets.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If assignAssets is not found, return null
      }
    } catch (error) {
      console.error('Error checking assignAssets existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = assignAssetsRepository; // Export the class
