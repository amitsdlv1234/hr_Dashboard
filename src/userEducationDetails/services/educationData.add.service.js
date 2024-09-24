// auth.service.js
const UserEducationDetails = require('../model/userEducation.modal');

class AddService {
   async addEducationDetails(user){
    try {
        console.log(user);
        const newUser=await UserEducationDetails.create(user);
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
        const newUser=await UserEducationDetails.findOne({where:{userId:userId}});
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
   async updateEducationDetails(user) {
    try {
        console.log("updateEducationDetails", user);
        const newUser = await UserEducationDetails.update(user, { where: { userId: user.userId } });
        if (!newUser) {
            return "Primary details not updated";
        } else {
            console.log("updatedEducationDetails", user);
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}


}



module.exports = AddService;
