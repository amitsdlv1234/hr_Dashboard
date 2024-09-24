// auth.service.js
const UserContactDetails = require('../model/userContact.modal');

class AddService {
   async addContactDetails(user){
    try {
        console.log(user);
        const newUser=await UserContactDetails.create(user);
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
        const newUser=await UserContactDetails.findOne({where:{userId:userId}});
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
   async updateContactDetails(user) {
    try {
        console.log("updateContactDetails", user);
        const newUser = await UserContactDetails.update(user, { where: { userId: user.userId } });
        if (!newUser) {
            return "Primary details not updated";
        } else {
            console.log("updatedContactDetails", user);
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}


}



module.exports = AddService;
