// auth.service.js
const expense = require('../model/expense.modal');

class AddService {
   async addexpense(user){
    try {
        console.log(user);
        const newUser=await expense.create(user);
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
        const newUser=await expense.findOne({where:{userId:userId}});
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
   async updateexpense(user) {
    try {
        console.log("updateexpense", user);
        const newUser = await expense.update(user, { where: { userId: user.userId } });
        if (!newUser) {
            return "Primary details not updated";
        } else {
            console.log("updatedexpense", user);
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}


}



module.exports = AddService;
