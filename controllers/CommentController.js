import Comment from '../models/CommentModel.js';
import User from '../models/UserModel.js';

// Get all comments
export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate('user', 'username email created_at');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get comments by user ID
export const getCommentsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const comments = await Comment.find({ user: userId }).populate('user', 'username email created_at');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new comment
export const createComment = async (req, res) => {
  const { user, commentContent } = req.body;

  try {
    const existingUser = await User.findById(user);
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const comment = new Comment({
      user: existingUser._id,
      commentContent,
    });

    const createdComment = await comment.save();
    res.status(201).json(createdComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a comment
export const updateComment = async (req, res) => {
  const { commentId } = req.params;
  const { commentContent } = req.body;

  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { commentContent },
      { new: true }
    );

    res.json(updatedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a comment
export const deleteComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const deletedComment = await Comment.findByIdAndDelete(commentId);
    res.json(deletedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

