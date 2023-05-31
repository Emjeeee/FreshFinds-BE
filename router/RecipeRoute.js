import express from "express";
<<<<<<< HEAD
import {
  getRecipes,
  getRecipeById,
  saveRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/RecipeController.js";
import { uploadImage } from "../middleware/storageConfig.js";
=======
import { getRecipes, getRecipeById, saveRecipe, updateRecipe, deleteRecipe } from "../controllers/RecipeController.js";
import { upload } from "../middleware/storageConfig.js";

>>>>>>> 99ed44d6d100e21b0dd5cedd2a1889e267d9e526

const router = express.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipeById);
router.post("/", uploadImage, saveRecipe);
router.patch("/:id", uploadImage, updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;
