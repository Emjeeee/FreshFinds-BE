import mongoose from "mongoose";

const RecipeSchema = mongoose.Schema({
  recipe_title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Upload",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  ingredients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ingredient",
  }],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const RecipeModel = mongoose.model("Recipe", RecipeSchema);

export default RecipeModel;
