import express from "express";
import { getRecipes, getRecipeById, saveRecipe, updateRecipe, deleteRecipe } from "../controllers/RecipeController.js";
import { upload } from "../middleware/storageConfig.js";


const router = express.Router();

// Route for getting all recipes
router.get("/recipes", getRecipes);

// Route for getting a recipe by ID
router.get("/recipes/:id", getRecipeById);

// Route for creating a new recipe
router.post("/recipes", upload.single("image"), saveRecipe);

// Route for updating an existing recipe
router.patch("/recipes/:id", upload.single("image"), updateRecipe);

// Route for deleting a recipe
router.delete("/recipes/:id", deleteRecipe);



export default router;
