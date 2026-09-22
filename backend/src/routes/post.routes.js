import { Router } from "express";

import { createPost, getPosts,updatePosts,deletePost } from "../controllers/post.controllers.js";
import {protect} from "../middleware/auth.middleware.js";
const router = Router(); 

router.route('/create').post(protect,createPost);//when POST request comes to /create , run createPost controller. must be logged in to create a post
router.route("/getPosts").get(getPosts); // anyone can view posts ,no login required
router.route("/update/:id").patch(protect,updatePosts); //:id <-- change the idea to a specific id number in postmon . must be logged in to update
router.route("/delete/:id").delete(protect,deletePost);//must be logged in to delete
export default router;


