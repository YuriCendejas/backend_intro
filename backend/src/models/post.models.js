import mongoose,{Schema} from "mongoose";
const postSchema = new Schema (
    {
        name: {
            type:String,
            required:true,
            trim:true,
        },

        age: {
            type:Number, // mongoose uses number not integer
            required:true,
            max:100,
            min:1,
        
        },
        description: {
            type:String,
            required:true, 
            trim: true,
        },
    },
    {
        timestamps: true
    }
)
export const Post = mongoose.model('Post',postSchema);