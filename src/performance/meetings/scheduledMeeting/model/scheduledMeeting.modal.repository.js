const scheduledMeeting = require('./scheduledMeeting.modal');
const BaseRepository = require('../../../../../services/database/main/BaseRepository');
const e = require('express');

class scheduledMeetingRepository extends BaseRepository {
  constructor() {
    super();
  }

  async checkscheduledMeetingExists(data) {
    try {
      let user;
      console.log(data)
        // If data is a number, assume it's a phone number
        user = await scheduledMeeting.findOne({
          where: {
            userId: data
          }
        }); 
       console.log(user);
      if (user) {
        return user;
      } else {
        return null; // If scheduledMeeting is not found, return null
      }
    } catch (error) {
      console.error('Error checking scheduledMeeting existence:', error);
      throw error; // Throw error for handling in the calling function
    }
}
}

module.exports = scheduledMeetingRepository; // Export the class
