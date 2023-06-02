import Comment from "../models/CommentModel.js";

// Get all Comment data
export const getComment = async (req, res) => {
  try {
    const comments = await Comment.find().populate("forum");
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Comment data by ID
export const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).populate("forum");
    res.json(comment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveComment = async (req, res) => {
    const { user, content, likes, comments } = req.body;
    const comment = new Comment({
      user,
      content,
      likes,
      comments,
    });
    try {
      const insertedComment = await comment.save();
      res.status(201).json(insertedComment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  
  

// Update a Comment
export const updateComment = async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json(updatedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a Comment
export const deleteComment = async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    res.status(201).json(deletedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
