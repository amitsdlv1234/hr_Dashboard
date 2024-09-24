// auth.service.js
const { where } = require('sequelize');
const UserRelationDetails = require('../model/userRelation.modal');

class AddService {
   async addRelationDetails(user){
    try {
        console.log(user);
        const newUser=await UserRelationDetails.create(user);
        if(!newUser){
        return "Relation details not Saved";
        }
        else{
            return newUser;
        }
    } catch (error) {
       console.log(error);
       return error; 
    }
   }
   async getRelationDetail(userId){
    try {
        console.log(userId);
        const newUser=await UserRelationDetails.findOne({where:{userId:userId}});
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
   async updateRelationDetails(user) {
    try {
        console.log("updateRelationDetails", user);
        const newUser = await UserRelationDetails.update(user, { where: { userId: user.userId } });
        if (!newUser) {
            return "Relation details not updated";
        } else {
            console.log("updatedRelationDetails", user);
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}


}



module.exports = AddService;
