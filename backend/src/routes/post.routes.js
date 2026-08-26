import { Router } from "express";

import { createPost, getPosts,updatePosts,deletePost } from "../controllers/post.controllers.js";
const router = Router(); 

router.route('/create').post(createPost);//when POST request comes to /create , run createPost controller
router.route("/getPosts").get(getPosts); 
router.route("/update/:id").patch(updatePosts); //:id <-- change the idea to a specific id number in postmon
router.route("/delete/:id").delete(deletePost);
export default router;


