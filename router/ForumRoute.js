import express from "express";
import { getForum, getForumById, saveForum, updateForum, deleteForum } from "../controllers/ForumController.js";

const router = express.Router();

router.get("/forum", getForum);
router.get("/forum/:id", getForumById);
router.post("/forum", saveForum);
router.patch("/forum/:id", updateForum);
router.delete("/forum/:id", deleteForum);

export default router;
