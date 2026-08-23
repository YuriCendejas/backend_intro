import { Router } from "express";

import { createPost } from "../controllers/post.controllers.js";
const router = Router(); 

router.route('/create').post(createPost);//when POST request comes to /create , run createPost controller
router.route("/getPosts").get(getPosts); 
export default router;


/* for postmon : http://localhost:5010/api/posts/create */