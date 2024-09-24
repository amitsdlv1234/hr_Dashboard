// auth.service.js
const { where } = require('sequelize');
const UserPrimaryDetails = require('../model/userPrimary.modal');

class AddService {
   async addPrimaryDetails(user){
    try {
        console.log(user);
        const newUser=await UserPrimaryDetails.create(user);
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
        const newUser=await UserPrimaryDetails.findOne({where:{userId:userId}});
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
   async updatePrimaryDetails(user) {
    try {
        console.log("updatePrimaryDetails", user);
        const newUser = await UserPrimaryDetails.update(user, { where: { userId: user.userId } });
        if (!newUser) {
            return "Primary details not updated";
        } else {
            console.log("updatedPrimaryDetails", user);
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}


}



module.exports = AddService;
