import { Post } from "../models/post.models.js";

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
            message:" internal server error",error
        });

    }
    };

    const getPosts = async (req,res) => {
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
            
        } catch (error) {
            res.status(500).json({
                message : " Internal server error",error
            });
            
        }
        
    };

    /* i believe keys are the value pairs of xyz,. fields inside [] .
            filed 1 (x) is 'name', field 2 (y) is 'description' and filed 3 (z) is 'age' . ex : [name, description,age]*/
    const updatePosts = async(req,res) => { 
        try {
            if (!Object.keys(req.body).length) {
                return res.status(400).json({
                    message: " No fileds provided for update"
                });
            } 
            const post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true});
            

            if(!post)return res.status(404).json({message : 'Post not found '});
            res.status(200).json({
                message:"post updated successfully",post
            });

        } catch(error){
    return res.status(500).json({
      message: "Internal server error",error
    });
 }
};
 const deletePost = async (req,res) => {
    try {
        const deleted = await Post.findByIdAndDelete(req.params.id); 
        if(!deleted) return res.status(400).json({
            message:"Post Not Found"
        }) //just incase you cant find what you want to delete.
        res.status(200).json({
            message:"Post Deleted"}) // bc we were able to delete the post
    } catch (error) {
        res.status(500).json({
            message:"Internal server Error",error
        });
        
    }
    
 };

export{createPost,getPosts,updatePosts,deletePost};