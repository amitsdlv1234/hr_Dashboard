// auth.service.js
const doc = require('../model/doc.modal');

class AddService {
   async addDoc(user,userId){
    try {
        console.log(user);
        const newUser=await doc.create({...user,userId:userId});
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
   async getDoc(userId){
    try {
        console.log(userId);
        const newUser=await doc.findOne({where:{userId:userId}});
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
   async updateDoc(user,userId) {
    try {
        console.log("updatedoc", user);
        const newUser = await doc.update(user, { where: { userId: userId } });
        if (!newUser) {
            return "Primary details not updated";
        } else {
            console.log("updateddoc", user);
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}


}



module.exports = AddService;
