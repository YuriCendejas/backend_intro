import { User } from "../models/user.model.js";

const getUserProfile = async (req,res) => {

    try {

        const user = await User.findById(req.user.id).select("-password");
//req.user.id - exist bc "protect" middleware ran first . created protect in auth.middleware.js file
/* it should verify the token and attach the id,email to the decoded to " req.user " . 
it'll reuse that here , instead of it needed to be typed again by the client*/
//.select("-password") meaning exclude this bc we dont want to send the hashed password ever.
if(!user){
return res.status(404).json({message:"Not found"}); 
}
return res.status(200).json({ user });
//200 = it worked ! sending back everything except the password
//username,email,timestamps,_id, your fields in User has.


        
    } catch (error) {
console.error(error);
// logs the real error for ME(yuri) to see the terminal/server logs
return res.status(500).json({message:"Internal server error"});
//500 = not the clients fault, its ours.
//we send a vague message to the client on purpose without giving extra details why
        
    }
    
};

export { getUserProfile};
// it can be imported into user.route.js.
