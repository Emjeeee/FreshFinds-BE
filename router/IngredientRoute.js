import express from "express";
import {
  getIngredient,
  getIngredientById,
  saveIngredient,
  updateIngredient,
  deleteIngredient,
} from "../controllers/IngredientController.js";

const router = express.Router();

router.get("/", getIngredient);
router.get("/:id", getIngredientById);
router.post("/", saveIngredient);
router.patch("/:id", updateIngredient);
router.delete("/:id", deleteIngredient);

export default router;
