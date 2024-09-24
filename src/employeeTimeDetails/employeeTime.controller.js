const employeeTimeRepository = require('./model/employeeTime.modal.repository');
const AddService = require('./services/employeeTime.add.service');

exports.addemployeeTime=async(req,res)=>{
    try {
        const user=req.body;
        const {userId}=req.body;
        console.log("user data now ",user.length===0);
         // Check if user data is empty
         if (!user || Object.keys(user).length === 0) {
            return res.status(400).json({ message: "User data is required." });
          }
        const EmployeeTimeRepository= new employeeTimeRepository();
        const present=await EmployeeTimeRepository.checkemployeeTimeExists(userId);
       console.log(present)
        if(present) res.status(202).json({message:"user Data is already register"});
        else{
           const addService=new AddService();
           const newUser=await addService.addemployeeTime(user);
           res.status(200).json(newUser);
        }    
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server error",error})
    }
    }
    exports.getemployeeTime=async(req,res)=>{
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
        exports.updateemployeeTime=async(req,res)=>{
            try {
                const user=req.body;
                const {userId}=req.body;
                console.log("user data now ",user.length===0);
                 // Check if user data is empty
                 if (!user || Object.keys(user).length === 0) {
                    return res.status(400).json({ message: "User data is required." });
                  }
                const EmployeeTimeRepository= new employeeTimeRepository();
                const present=await EmployeeTimeRepository.checkemployeeTimeExists(userId);
               console.log(present)
                if(!present) res.status(202).json({message:"user Data is not present"});
                else{
                   const addService=new AddService();
                   const newUser=await addService.updateemployeeTime(user);
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