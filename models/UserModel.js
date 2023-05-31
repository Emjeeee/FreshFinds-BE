import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  recipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe",
  }],
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
