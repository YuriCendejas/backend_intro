 import {User} from "../models/user.model.js";
import jwt from "jsonwebtoken";

 const registerUser = async (req,res) => {
    try { const {username,password,email} =req.body;

    if(!username || !password|| !email){
        return res.status(400).json({message: " All fields required"})
    } // making sure everything is written or else an alert of " all fields are required" . 400 = client side error


    const exists = await User.findOne({
        $or: [ {email: email.toLowerCase() }, // $or bc try to find if anything matches the email or username 
        {username: username.toLowerCase()}
    ] });
    if (exists) {
        return res.status(400).json({message:"hmmm, looks like that user already exists"});
    }// user already exists . 400 = client side error

     await User.create({
        username,
        password,
        email
    });
    return res.status(201).json({ // 201 = means "ok"/ successful request
        message: " User created successfully",
    }); 
     }
    catch (error){
    console.error(error);
    return res.status(500).json({ // 500 = server side error
        message: "server-side error "
    });
    }
    
    };

    const loginUser = async (req,res) => {
        try { 
            //checking if the user already exists
        const {email,password} = req.body;

        if (!email || !password){ // that way it dont come back as undefined or error
            return res.status(400).json({
                message:"Email and password are required"
            });
        }

const user = await User.findOne({
    email : email.toLowerCase()
});
if (!user) {return res.status(400).json({ // if you couldnt find the user
    message: "Invalid email or password"
});
}
//compare passwords for Login
const isMatch = await user.comparePassword(password);

 if (!isMatch) { return res.status(400).json
    ({ message: "Invalid email or password"}

    );
}
const token = jwt.sign({ // creates a signed token contains the user ID and email

    id: user._id,
    email: user.email,
},
    process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN,
    }
);


 return res.status(200).json({
    message: "Login successful",
    token,
   
 });
 
        } 
        catch (error) {
            console.error(error)
            return res.status(500).json
            ({message : "Internal server error"

            });
            
        }
    };

    const logoutUser = async (req,res) => {
        try { 
            const {email} =req.body; // same as " {email : email}" key and variable are the same
        const user = await User.findOne({
            email });

   if (!user) return res.status(404).json({
                message: "User not found"
  });

            return res.status(200).json({
                message: "Logout successful"
   });
            
        } catch (error) { console.error(error); // for it wont send the error to the client
            return res.status(500).json({
            message:"Internal server error",
        });
            
        }

    }
    export {registerUser,loginUser,logoutUser};
