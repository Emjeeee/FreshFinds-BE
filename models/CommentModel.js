import mongoose from "mongoose";

const { Schema } = mongoose;

const CommentSchema = new Schema({
  forum: {
    type: Schema.Types.ObjectId,
    ref: "Forum",
  },
  commentContent: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
