// auth.service.js
const UserAddressProofDetails = require('../model/userAddressProof.modal');

class AddService {
   async addAddressProofDetails(user){
    try {
        console.log(user);
        const newUser=await UserAddressProofDetails.create(user);
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
        const newUser=await UserAddressProofDetails.findOne({where:{userId:userId}});
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
   async updateAddressProofDetails(user) {
    try {
        console.log("updateAddressProofDetails", user);
        const newUser = await UserAddressProofDetails.update(user, { where: { userId: user.userId } });
        if (!newUser) {
            return "Primary details not updated";
        } else {
            console.log("updatedAddressProofDetails", user);
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}


}



module.exports = AddService;
