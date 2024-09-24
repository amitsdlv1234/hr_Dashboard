// auth.service.js
const employeejobDetail = require('../model/jobDetails.modal');

class AddService {
   async addemployeejobDetail(user){
    try {
        console.log(user);
        const newUser=await employeejobDetail.create(user);
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
        const newUser=await employeejobDetail.findOne({where:{userId:userId}});
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
   async updateemployeejobDetail(user) {
    try {
        console.log("updateemployeejobDetail", user);
        const newUser = await employeejobDetail.update(user, { where: { userId: user.userId } });
        if (!newUser) {
            return "Primary details not updated";
        } else {
            console.log("updatedemployeejobDetail", user);
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}


}



module.exports = AddService;
