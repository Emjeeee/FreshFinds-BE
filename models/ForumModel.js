import mongoose from "mongoose";

const ForumSchema = mongoose.Schema({
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

const ForumModel = mongoose.model("Forum", ForumSchema);

export default ForumModel;