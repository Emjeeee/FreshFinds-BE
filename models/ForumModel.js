import mongoose from "mongoose";
import User from "./UserModel.js";

const ForumSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users", // Update the reference to match the model name "Users"
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Forum = mongoose.model("Forum", ForumSchema);

export default Forum;
