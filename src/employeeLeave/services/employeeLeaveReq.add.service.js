// auth.service.js
const employeeLeaveReq = require('../model/employeeLeaveReq.modal');

class AddService {
   async addemployeeLeaveReq(user){
    try {
        console.log(user);
        const newUser=await employeeLeaveReq.create(user);
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
        const newUser=await employeeLeaveReq.findOne({where:{userId:userId}});
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
   async updateemployeeLeaveReq(user) {
    try {
        console.log("updateemployeeLeaveReq", user);
        const newUser = await employeeLeaveReq.update(user, { where: { userId: user.userId } });
        if (!newUser) {
            return "Primary details not updated";
        } else {
            console.log("updatedemployeeLeaveReq", user);
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}


}



module.exports = AddService;
