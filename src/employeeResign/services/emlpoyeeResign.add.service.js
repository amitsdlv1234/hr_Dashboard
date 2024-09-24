// auth.service.js
const employeeResign = require('../model/emlpoyeeResign.modal');

class AddService {
   async addemployeeResign(user){
    try {
        console.log(user);
        const newUser=await employeeResign.create(user);
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
        const newUser=await employeeResign.findOne({where:{userId:userId}});
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
   async updateemployeeResign(user) {
    try {
        console.log("updateemployeeResign", user);
        const newUser = await employeeResign.update(user, { where: { userId: user.userId } });
        if (!newUser) {
            return "Primary details not updated";
        } else {
            console.log("updatedemployeeResign", user);
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}


}



module.exports = AddService;
