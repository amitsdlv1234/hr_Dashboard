// auth.service.js
const UserPermanentAddressDetails = require('../model/userPermanentAddress.modal');

class AddService {
   async addAddressDetails(user){
    try {
        console.log(user);
        const newUser=await UserPermanentAddressDetails.create(user);
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
        const newUser=await UserPermanentAddressDetails.findOne({where:{userId:userId}});
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
   async updateAddressDetails(user) {
    try {
        console.log("updateAddressDetails", user);
        const newUser = await UserPermanentAddressDetails.update(user, { where: { userId: user.userId } });
        if (!newUser) {
            return "Primary details not updated";
        } else {
            console.log("updatedAddressDetails", user);
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}


}



module.exports = AddService;
