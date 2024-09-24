// auth.service.js
const employeeTime = require('../model/employeeTime.modal');

class AddService {
   async addemployeeTime(user){
    try {
        console.log(user);
        const newUser=await employeeTime.create(user);
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
        const newUser=await employeeTime.findOne({where:{userId:userId}});
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
   async updateemployeeTime(user) {
    try {
        console.log("updateemployeeTime", user);
        const newUser = await employeeTime.update(user, { where: { userId: user.userId } });
        if (!newUser) {
            return "Primary details not updated";
        } else {
            console.log("updatedemployeeTime", user);
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}


}



module.exports = AddService;
