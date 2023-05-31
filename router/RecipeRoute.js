import express from "express";
import {
  getRecipes,
  getRecipeById,
  saveRecipe,
  updateRecipe,
  deleteRecipe,
} from "../controllers/RecipeController.js";
import { uploadImage } from "../middleware/storageConfig.js";

const router = express.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipeById);
router.post("/", uploadImage, saveRecipe);
router.patch("/:id", uploadImage, updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;
