 import {User} from "../models/user.model.js" 

 const registerUser = async (req,res) => {
    try { const {username,password,email} =req.body;

    if(!username || !password|| !email){
        return res.status(400).json({message: " All fields required"})
    }

        
    } catch (error) {
    console.log("try again");    
    }
    
 }
