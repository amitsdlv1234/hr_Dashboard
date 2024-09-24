// auth.service.js
const UserIdentityInfoDetails = require('../model/userIdentityInfo.modal');

class AddService {
   async addIdentityInfoDetails(user){
    try {
        console.log(user);
        const newUser=await UserIdentityInfoDetails.create(user);
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
        const newUser=await UserIdentityInfoDetails.findOne({where:{userId:userId}});
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
   async updateIdentityInfoDetails(user) {
    try {
        console.log("updateIdentityInfoDetails", user);
        const newUser = await UserIdentityInfoDetails.update(user, { where: { userId: user.userId } });
        if (!newUser) {
            return "Primary details not updated";
        } else {
            console.log("updatedIdentityInfoDetails", user);
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}


}



module.exports = AddService;
