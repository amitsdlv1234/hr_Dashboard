// auth.service.js
const employeeAttendanceReq = require('../model/employeeAttendance.modal');

class AddService {
   async addemployeeAttendance(user){
    try {
        console.log(user);
        const newUser=await employeeAttendanceReq.create(user);
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
        const newUser=await employeeAttendanceReq.findOne({where:{userId:userId}});
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
   async updateemployeeAttendance(user) {
    try {
        console.log("updateemployeeAttendance", user);
        const newUser = await employeeAttendanceReq.update(user, { where: { userId: user.userId } });
        if (!newUser) {
            return "Primary details not updated";
        } else {
            console.log("updatedemployeeAttendance", user);
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}


}



module.exports = AddService;
