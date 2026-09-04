import { User } from "../models/user.model.js";

const getUserProfile = async (req,res) => {

    try {

        const user = await User.findById(req.user.id).select("-password");
//req.user.id - exist bc "protect" middleware ran first . created protect in auth.middleware.js file
/* it should verify the token and attach the id,email to the decoded to " req.user " . 
it'll reuse that here , instead of it needed to be typed again by the client*/
//.select("-password") meaning exclude this 


        
    } catch (error) {

        
    }
    
}
