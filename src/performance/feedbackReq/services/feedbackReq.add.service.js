// auth.service.js
const feedbackReq = require('../model/feedbackReq.modal');

class AddService {
   async addfeedbackReq(user){
    try {
        console.log(user);
        const newUser=await feedbackReq.create(user);
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
        const newUser=await feedbackReq.findOne({where:{userId:userId}});
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
   async updatefeedbackReq(user) {
    try {
        console.log("updatefeedbackReq", user);
        const newUser = await feedbackReq.update(user, { where: { userId: user.userId } });
        if (!newUser) {
            return "Primary details not updated";
        } else {
            console.log("updatedfeedbackReq", user);
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}


}



module.exports = AddService;
