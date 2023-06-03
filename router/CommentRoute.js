import express from 'express';
import {
  getComments,
  getCommentsByUserId,
  createComment,
  updateComment,
  deleteComment,
} from '../controllers/CommentController.js';

const router = express.Router();

router.get('/', getComments);
router.get('/:userId', getCommentsByUserId);
router.post('/', createComment);
router.patch('/:commentId', updateComment);
router.delete('/:commentId', deleteComment);

export default router;
