import { Router } from "express";
/* routers the tool that helps us gets routes in  express,
 express is the framwork that handles the routes */
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/auth.controllers.js";

import { getUserProfile } from "../controllers/user.controllers.js";
import { protect } from "../middleware/auth.middleware.js";



const router = Router(); //They are in two different files, so they create two separate routers.

router.get("/",(req,res) => {
  res.json({ message:"Users route works!"});
});


router.post("/register", registerUser); // part of the /api/users for the Postmon url
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get(/profile/protect,getUserProfile); //new route

export default router;
