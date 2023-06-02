import mongoose from "mongoose";
import Forum from "./ForumModel.js";

const LikeSchema = mongoose.Schema({
    forum: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Forum", //update the reference to match the model name "Forum"
        required: true
    },
    likeCount: {
        type: String,
        required: true
    },
    create_at: {
        type: Date,
        default: Date.now
    }
});

const Likes = mongoose.model("Likes", LikeSchema);

export default Likes;