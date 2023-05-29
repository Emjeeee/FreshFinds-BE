import mongoose from "mongoose";

const Recipe = mongoose.Schema({
    recipe_title: {
        type : String,
        required : true
    } ,
    description: {
        type : String,
        required : true
    } ,
    instructions: {
        type : String,
        required : true
    } ,
    image: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Upload",
    } ,
    created_at: {
        type : Date,
        default : Date.now,
    },
    ingridients: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Ingridient",
    }],
    category: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category",
    },
});