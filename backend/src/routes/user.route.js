import { Router } from 'express'; 
/* routers the tool that helps us gets routes in  express,
 express is the framwork that handles the routes */
import { registerUser } from '../controllers/user.controllers.js';
 const router = Router();
 router.post("/register",registerUser); // part of the /api/users for the Postmon url
 
 export default router;