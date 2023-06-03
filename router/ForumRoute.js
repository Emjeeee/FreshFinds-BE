import express from 'express';
import {
  getForum,
  getForumById,
  saveForum,
  updateForum,
  deleteForum,
} from '../controllers/ForumController.js';

const router = express.Router();

router.get('/', getForum);
router.get('/:id', getForumById);
router.post('/', saveForum);
router.patch('/:id', updateForum);
router.delete('/:id', deleteForum);

export default router;
