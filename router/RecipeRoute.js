import express from "express";
import { getRecipes, getRecipeById, saveRecipe, updateRecipe, deleteRecipe } from "../controllers/RecipeController.js";
import multer from "multer";
import path from "path";

const router = express.Router();

// Create Multer middleware for handling file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
      const extension = path.extname(file.originalname);
      cb(null, `${uniqueSuffix}${extension}`);
    },
  }),
});

router.get("/", getRecipes);
router.get("/:id", getRecipeById);
router.post("/", upload.single("image"), saveRecipe);
router.patch("/:id", upload.single("image"), updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;
