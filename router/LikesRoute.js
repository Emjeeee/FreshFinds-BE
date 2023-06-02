import express from "express";
import { getLikes, getLikesById, saveLikes, updatedLikes, deleteLikes} from "../controllers/LikesController.js";

const router = express.Router();

router.get("/", getLikes);
router.get("/:id", getLikesById);
router.post("/", saveLikes);
router.patch("/:id", updatedLikes);
router.delete("/:id", deleteLikes);

export default router;