 import {User} from "../models/user.model.js";

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
        try { const {email,password} = req.body;
const user = await User.findOne({
    email : email.toLowerCase()
});
if (!user) {return res.status(400).json({
    message: "Invalid email or password"
});
}
//compare passwords -Login
const isMatch = await user.comparePassword(password);
 if (!isMatch) { return res.status(400).json
    ({ message: "Invalid email or password"});
}

 return res.status(200).json({
    message: "Login successful"
   
 });

        } catch (error) {res.status(500).json
            ({message : "Internal server error"});
            
        }
    };

    const logoutUser = async (req,res) => {
        try { 
            const {email} =req.body;
        const user = await User.findOne({
            email });

             if (!user) return res.status(404).json({
                message: "User not found"
             });

             res.status(200).json({
                message: "Logout successful"
             });
            
        } catch (error) { res.status(500).json({
            message:"Internal server error",error
        });
            
        }

    }
    export {registerUser,loginUser,logoutUser};
