import Forum from "../models/ForumModel.js";
import User from "../models/UserModel.js";
import Comment from "../models/CommentModel.js";
import Like from "../models/LikeModel.js";

// Get all Forum data
export const getForum = async (req, res) => {
  try {
    const forum = await Forum.find()
      .populate({
        path: "user",
        model: "User",
        select: "username email created_at"
      })
      .populate({
        path: "comments",
        model: "Comment",
        select: "commentContent created_at"
      });
    res.json(forum);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Forum data by ID
export const getForumById = async (req, res) => {
  try {
    const forum = await Forum.findById(req.params.id)
      .populate({
        path: "user",
        model: "User",
        select: "username email created_at"
      })
      .populate({
        path: "comments",
        model: "Comment",
        select: "commentContent created_at"
      });
    res.json(forum);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


// Create a new Forum
export const saveForum = async (req, res) => {
  const { user, content, likes, comments } = req.body;

  try {
    // Create the forum
    const forum = new Forum({
      user,
      content,
      likes: likes || 0,
      comments: comments || [],
    });
    const insertedForum = await forum.save();

    // Retrieve the updated forum from the database, including populated fields
    const populatedForum = await Forum.findById(insertedForum._id)
      .populate({
        path: 'user',
        model: 'User',
        select: 'username email created_at',
      })
      .populate({
        path: 'comments',
        model: 'Comment',
        select: 'commentContent created_at',
      });

    res.status(201).json(populatedForum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Update likes for a Forum
export const updateLikes = async (req, res) => {
  try {
    const forumId = req.params.id;
    const forum = await Forum.findById(forumId);

    // Increment the likes value
    forum.likes += 1;

    // Save the updated forum
    const updatedForum = await forum.save();

    res.status(201).json(updatedForum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add a new comment to a Forum
export const addComment = async (req, res) => {
  const { commentContent } = req.body;
  const forumId = req.params.id;

  try {
    const forum = await Forum.findById(forumId);

    if (!forum) {
      return res.status(404).json({ message: 'Forum not found' });
    }

    // Create a new comment
    const newComment = new Comment({
      forum: forumId,
      commentContent: commentContent,
    });

    // Save the new comment
    const createdComment = await newComment.save();

    // Add the comment to the forum's comments array
    forum.comments.push(createdComment);

    // Save the updated forum
    await forum.save();

    res.status(201).json(createdComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create a new Like
export const saveLikes = async (req, res) => {
  const { forum, likeCount } = req.body;

  try {
    const newLike = new Like({
      forum,
      likeCount,
    });

    const insertedLike = await newLike.save();

    const updatedForum = await Forum.findByIdAndUpdate(forum, {
      $push: { likes: insertedLike._id },
    });

    res.status(201).json(updatedForum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a Forum
export const updateForum = async (req, res) => {
  try {
    const updatedForum = await Forum.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json(updatedForum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a Forum
export const deleteForum = async (req, res) => {
  try {
    const deletedForum = await Forum.findByIdAndDelete(req.params.id);
    res.status(201).json(deletedForum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
