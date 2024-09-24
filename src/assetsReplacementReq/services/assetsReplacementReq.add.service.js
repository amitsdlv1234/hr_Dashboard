// auth.service.js
const assetsReplacementReq = require('../model/assetsReplacementReq.modal');

class AddService {
   async addassetsReplacementReq(user){
    try {
        console.log(user);
        const newUser=await assetsReplacementReq.create(user);
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
        const newUser=await assetsReplacementReq.findOne({where:{userId:userId}});
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
   async updateassetsReplacementReq(user) {
    try {
        console.log("updateassetsReplacementReq", user);
        const newUser = await assetsReplacementReq.update(user, { where: { userId: user.userId } });
        if (!newUser) {
            return "Primary details not updated";
        } else {
            console.log("updatedassetsReplacementReq", user);
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}


}



module.exports = AddService;
