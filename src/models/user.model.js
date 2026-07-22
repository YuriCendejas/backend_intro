import mongoose,{Schema} from "mongoose";
import validator from "validator"; // for emails
import bcrypt from "bcrypt"; // hashes my passwords in mongodb

const userSchema = new Schema({
    username : {
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true, // for no white spaces.
        minLength:2, // minimum length on how long the username has to be.
        maxLength:20, // same as minlength but this is for the max

    },
    password:{
        type:String,
        required:true,
        minLength:10, 
        maxLength:30,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate:{ // this should throw a error if its not a vaild email.
            validator: validator.isEmail,
            message:"Please provide a valid email",
        },
    },

},
 {
    timestamps:true, // when the user was created.
 }
);

userSchema.pre("save",async function(){ // a regular function bc a arrow function wont refer to the current user document (mongoose middleware relies on this)
    if (!this.isModified("password")) return; // if its not modified or updated then it doesnt have to be hashed again and again.

    this.password = await bcrypt.hash(this.password,10); // if your password was updated/changed then hash it 10 rounds 

});
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password,this.password)
}


export const User = mongoose.model("User",userSchema);