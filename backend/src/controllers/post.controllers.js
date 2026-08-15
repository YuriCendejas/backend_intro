import { Post } from "../models/post.models";

const createPost = async (req,res) => {
    try {
        const { name,description,age} = req.body; // to create a post

         if(!name || !description || !age){ // if the user doesnt provide these , then throw a error to the user.
         return res.status(400).json({message: "All fields required!"});
         }
         // if the user types all 3 of what fields are required
         const post = await Post.create({name,description,age}); // the capital P on Post is referring to mongoose Post.model.js variable
        return res.status(201).json({
            message:"Post created successfully",post
         });
        
    } catch (error) { 
        return res.status(500).json({
            message:" internal server error",error});

        
    }
};
export{createPost};