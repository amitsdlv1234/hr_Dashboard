// auth.service.js
const scheduledMeeting = require('../model/scheduledMeeting.modal');

class AddService {
   async addscheduledMeeting(user){
    try {
        console.log(user);
        const newUser=await scheduledMeeting.create(user);
        if(!newUser){
        return "Primary details not Saved";
        }
        else{
            return newUser;
        }
    } catch (error) {
       console.log(error);
       return error; 
    }
   }
   async getPrimaryDetail(userId){
    try {
        console.log(userId);
        const newUser=await scheduledMeeting.findOne({where:{userId:userId}});
        if(!newUser){
        return "Data not present";
        }
        else{
            return newUser;
        }
    } catch (error) {
       console.log(error);
       return error; 
    }
   }
   async updatescheduledMeeting(user) {
    try {
        console.log("updatescheduledMeeting", user);
        const newUser = await scheduledMeeting.update(user, { where: { userId: user.userId } });
        if (!newUser) {
            return "Primary details not updated";
        } else {
            console.log("updatedscheduledMeeting", user);
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}


}



module.exports = AddService;
