import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
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
  recipe: [{
    type: Schema.Types.ObjectId,
    ref: "Recipe",
  }],
});

const User = mongoose.model("User", UserSchema);

export default User;
