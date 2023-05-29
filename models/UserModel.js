import mongoose from "mongoose";

const User = mongoose.Schema({
   username: {
    type : String,
    required : true
   } ,
   email: {
    type : String,
    required : true,
   } ,
   password: {
    type : String,
    required : true,
   },
   created_at: {
    type : Date,
    default : Date.now,
   },

recipe:[{
   type: mongoose.Schema.Types.ObjectId,
   ref: "Recipe",
}],});

const UserModel = mongoose.model("Users", User);

export default UserModel;