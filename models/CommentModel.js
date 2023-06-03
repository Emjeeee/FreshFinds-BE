import mongoose from 'mongoose';
import User from './UserModel.js';

const { Schema } = mongoose;

const CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  commentContent: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;
