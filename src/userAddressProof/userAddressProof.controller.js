const UserAddressProofDetailsRepository = require('./model/userAddressProof.modal.repository');
const AddService = require('./services/addressProofData.add.service');

const bcrypt = require('bcrypt');

exports.addAddressProofDetails=async(req,res)=>{
    try {
        const user=req.body;
        const {userId}=req.body;
        console.log("user data now ",user.length===0);
         // Check if user data is empty
         if (!user || Object.keys(user).length === 0) {
            return res.status(400).json({ message: "User data is required." });
          }
        const userAddressProofDetailsRepository= new UserAddressProofDetailsRepository();
        const present=await userAddressProofDetailsRepository.checkUserAddressProofDetailsExists(userId);
       console.log(present)
        if(present) res.status(202).json({message:"user Data is already register"});
        else{
           const addService=new AddService();
           const newUser=await addService.addAddressProofDetails(user);
           res.status(200).json(newUser);
        }    
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server error",error})
    }
    }
    exports.getAddressProofDetails=async(req,res)=>{
        try {
            const {userId}=req.body;
               const addService=new AddService();
               const newUser=await addService.getPrimaryDetail(userId);
               res.status(200).json(newUser);
              
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"Server error",error})
        }
        }
        exports.updateAddressProofDetails=async(req,res)=>{
            try {
                const user=req.body;
                const {userId}=req.body;
                console.log("user data now ",user.length===0);
                 // Check if user data is empty
                 if (!user || Object.keys(user).length === 0) {
                    return res.status(400).json({ message: "User data is required." });
                  }
                const userAddressProofDetailsRepository= new UserAddressProofDetailsRepository();
                const present=await userAddressProofDetailsRepository.checkUserAddressProofDetailsExists(userId);
               console.log(present)
                if(!present) res.status(202).json({message:"user Data is not present"});
                else{
                   const addService=new AddService();
                   const newUser=await addService.updateAddressProofDetails(user);
                   console.log("newuser",newUser)
                   if(newUser){
                    res.status(200).json({message:"user Data updated",newUser});
                   }
                   else res.status(201).json({message:"user Data not updated"});
                }    
            } catch (error) {
                console.log(error);
                res.status(500).json({message:"Server error",error})
            }
            }