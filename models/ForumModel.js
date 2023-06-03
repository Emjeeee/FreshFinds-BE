import mongoose from 'mongoose';
import User from "./UserModel.js";

const { Schema } = mongoose;

const ForumSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const Forum = mongoose.model('Forum', ForumSchema);

export default Forum;
