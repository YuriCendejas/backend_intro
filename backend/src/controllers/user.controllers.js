 import {User} from "../models/user.model.js" 

 const registerUser = async (req,res) => {
    try { const {username,password,email} =req.body;

    if(!username || !password|| !email){
        return res.status(400).json({message: " All fields required"})
    } // making sure everything is written or else an alert of " all fields are required" . 400 = client side error


    const exists = await User.findOne({email: email.toLowerCase() });
    if (exists) {
        return res.status(400).json({message:"hmmm, looks like that user already exists"});
    }// user already exists . 400 = client server error

    const user = await User.create({
        username,
        password,
        email
    });

    return res.status(201).json({ // 201 = means "ok"
        message: " User created successfully",
    });

    catch (error){
    console.error(error);
    return res.status(500).json({ // 500 = server side error
        message: "server-side error "
    });
    }
    
 };
export {registerUser};