import Ingredient from "../models/IngredientModel.js";
import Recipe from "../models/RecipeModel.js";

export const getIngredient = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getIngredientById = async (req, res) => {
  try {
    const ingredient = await Ingredient.findById(req.params.id);
    if (!ingredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }
    res.json(ingredient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const saveIngredient = async (req, res) => {
    try {
      const { recipe, name, quantity } = req.body;
  
      // Check if the recipe exists
      const existingRecipe = await Recipe.findById(recipe);
      if (!existingRecipe) {
        return res.status(404).json({ message: "Recipe not found" });
      }
  
      const ingredient = new Ingredient({
        recipe,
        name,
        quantity,
      });
  
      const savedIngredient = await ingredient.save();
  
      // Add the ingredient to the recipe's ingredients array
      existingRecipe.ingredients.push(savedIngredient._id);
      await existingRecipe.save();
  
      res.status(201).json(savedIngredient);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  export const updateIngredient = async (req, res) => {
    try {
      const { recipe, name, quantity } = req.body;
  
      // Check if the recipe exists
      const existingRecipe = await Recipe.findById(recipe);
      if (!existingRecipe) {
        return res.status(404).json({ message: "Recipe not found" });
      }
  
      const updatedIngredient = await Ingredient.findByIdAndUpdate(
        req.params.id,
        { recipe, name, quantity },
        { new: true }
      );
  
      if (!updatedIngredient) {
        return res.status(404).json({ message: "Ingredient not found" });
      }
  
      res.json(updatedIngredient);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

export const deleteIngredient = async (req, res) => {
  try {
    const deletedIngredient = await Ingredient.findByIdAndDelete(req.params.id);

    if (!deletedIngredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }

    // Remove the ingredient from the recipe's ingredients array
    const recipe = await Recipe.findById(deletedIngredient.recipe);
    if (recipe) {
      recipe.ingredients = recipe.ingredients.filter(
        (ingredientId) => ingredientId.toString() !== deletedIngredient._id.toString()
      );
      await recipe.save();
    }

    res.json(deletedIngredient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
