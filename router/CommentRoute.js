import express from "express";
import Comment from "../models/CommentModel.js";
import {
  getComment,
  getCommentById,
  saveComment,
  updateComment,
  deleteComment
} from "../controllers/CommentController.js";

const router = express.Router();

router.get("/", getComment);
router.get("/:id", getCommentById);
router.post("/", saveComment);
router.patch("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;
