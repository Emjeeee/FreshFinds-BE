import mongoose from "mongoose";

const Forum = mongoose.Schema({
    title: {
        type : String,
        required : true
    } ,
    created_at: {
        type : Date,
        default : Date.now,
    },

    user:[{
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
});

const ForumModel = mongoose.model("Forum", Forum);

export default ForumModel;