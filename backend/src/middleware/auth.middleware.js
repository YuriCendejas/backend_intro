import jwt from "jsonwebtoken";

const protect = (req,res,next)=>{
/* "next" bc its a express thing  , this means "this request passed" , 
so keep it going to the actual route handler
*/
    try {
        const authHeader = req.headers.authorization;
// the frontend sends token in the request headers 
if (!authHeader || !authHeader.startsWith("Bearer ")){
    //if there's no header at all, OR it doesn't start with "Bearer ", there's no valid token to check -chat
    //bearer bc it doesnt matter whose holding the movie tickect as long as its a vaild one , no further ID/or proof needed to access
return res.status(401).json({message:"no token provided"});
// 401 bc its not authorized bc the client didnt prove who they were.
}
const token =authHeader.split("")[1];
/*authHeader.split("")[1] basically is just saying cut the string at the space and
give me the second part bc the index of the token would be 1 and "bearer" is index of 0*/

const decoded =jwt.verify(token,process.env.JWT_SECRET);
//The verify part is to verify an existing token exist instead of "jwt.sign() "",that creates a new token when loging in for the first time
        // checks if token was really OUR token and not just a faked one typed 
        //has it expired yet ? from the JWT_EXPIRES_IN from env folder that we set to expire in a specifc timeframe 
    
        req,user
    } catch (error) {
        
    }
}