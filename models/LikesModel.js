import mongoose from "mongoose";
import Forum from "./ForumModel.js";

const LikeSchema = mongoose.Schema({
  forum: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Forum",
    required: true
  },
  likeCount: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Like = mongoose.model("Like", LikeSchema);

export default Like;
