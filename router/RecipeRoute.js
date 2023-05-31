import express from "express";
import { getRecipes, getRecipeById, saveRecipe, updateRecipe, deleteRecipe } from "../controllers/RecipeController.js";
import multer from "multer";

const router = express.Router();

// Create Multer middleware for handling file uploads
const upload = multer({ dest: "uploads/" });

router.get("/", getRecipes);
router.get("/:id", getRecipeById);
router.post("/", upload.single("image"), saveRecipe);
router.patch("/:id", upload.single("image"), updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;
