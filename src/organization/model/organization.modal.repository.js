const Organization = require('./organization.modal');
const BaseRepository = require('../../../services/database/main/BaseRepository');
const e = require('express');

class OrganizationRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkOrganizationExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await Organization.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If Organization is not found, return null
      }
    } catch (error) {
      console.error('Error checking Organization existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = OrganizationRepository; // Export the class
