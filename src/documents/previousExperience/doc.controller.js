const docRepository = require('./model/doc.modal.repository');
const AddService = require('./services/doc.add.service');
const fs = require('fs');
exports.adddoc=async(req,res)=>{
    try {
        const user=req.body;
        const {userId}=req.params;
        console.log("userId",userId)
        const path=req.file.path;
        console.log(user,path);
        console.log("user data now ",user.length===0);
         // Check if user data is empty
         if (!user || Object.keys(user).length === 0) {
            return res.status(400).json({ message: "User data is required." });
          }
        const DocRepository= new docRepository();
        const present=await DocRepository.checkdocExists(userId);
       console.log(present)
        if(present) res.status(202).json({message:"user Data is already register"});
        else{
           const addService=new AddService();
           const newUser=await addService.addDoc({...user,path:path},userId);
           res.status(200).json(newUser);
        }    
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server error",error})
    }
    }
    exports.getdoc=async(req,res)=>{
        try {
            const {userId}=req.params;
               const addService=new AddService();
               const newUser=await addService.getDoc(userId);
               res.status(200).json(newUser);
              
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"Server error",error})
        }
        }
        exports.updatedoc=async(req,res)=>{
            let present=null;
            try {
                const user=req.body;
                const {userId}=req.params;
                const path=req.file.path;
                console.log("user data now ",user.length===0);
                 // Check if user data is empty
                 if (!user || Object.keys(user).length === 0) {
                    return res.status(400).json({ message: "User data is required." });
                  }
                const DocRepository= new docRepository();
                 present=await DocRepository.checkdocExists(userId);
               console.log("present",present)
                if(!present) res.status(202).json({message:"user Data is not present"});
                else{
                    if(present){
                        const deleteFile=present.path;
                        if(deleteFile){
                            fs.unlink(deleteFile, function (err) {
                                if (err) throw err;
                                console.log('File deleted!');
                              });
                        }
                       
                    }
                   const addService=new AddService();
                   const newUser=await addService.updateDoc({...user,path:path},userId);
                   console.log("newuser",newUser)
                   if(newUser){
                    res.status(200).json({message:"user Data updated",newUser});
                   }
                   else res.status(201).json({message:"user Data not updated"});
                }    
            } catch (error) {
                if(present){
                    const deleteFile=present.path;
                    fs.unlink(deleteFile, function (err) {
                      if (err) throw err;
                      console.log('File deleted!');
                    });
                }
                console.log(error);
                res.status(500).json({message:"Server error",error})
            }
            }