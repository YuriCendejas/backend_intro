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

        
    } catch (error) {
        
    }
}