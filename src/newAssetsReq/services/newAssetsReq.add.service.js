// auth.service.js
const newAssetsReq = require('../model/newAssetsReq.modal');

class AddService {
   async addnewAssetsReq(user){
    try {
        console.log(user);
        const newUser=await newAssetsReq.create(user);
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
        const newUser=await newAssetsReq.findOne({where:{userId:userId}});
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
   async updatenewAssetsReq(user) {
    try {
        console.log("updatenewAssetsReq", user);
        const newUser = await newAssetsReq.update(user, { where: { userId: user.userId } });
        if (!newUser) {
            return "Primary details not updated";
        } else {
            console.log("updatednewAssetsReq", user);
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}


}



module.exports = AddService;
