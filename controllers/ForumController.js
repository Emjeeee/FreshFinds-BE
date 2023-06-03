import Forum from '../models/ForumModel.js';
import User from '../models/UserModel.js';

// Get all Forum data
export const getForum = async (req, res) => {
  try {
    const forum = await Forum.find()
      .populate({
        path: 'user',
        model: 'User',
        select: 'username email created_at',
      })
      .select('user content created_at likes');

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
        path: 'user',
        model: 'User',
        select: 'username email created_at',
      })
      .select('user content created_at likes');

    res.json(forum);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create a new Forum
export const saveForum = async (req, res) => {
  const { user, content } = req.body;

  try {
    // Create the forum
    const forum = new Forum({
      user,
      content,
    });
    const insertedForum = await forum.save();

    // Retrieve the updated forum from the database, including populated fields
    const populatedForum = await Forum.findById(insertedForum._id)
      .populate({
        path: 'user',
        model: 'User',
        select: 'username email created_at',
      })
      .select('user content created_at likes');

    res.status(201).json(populatedForum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update likes for a Forum
export const updateForum = async (req, res) => {
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

// Delete a Forum
export const deleteForum = async (req, res) => {
  try {
    const deletedForum = await Forum.findByIdAndDelete(req.params.id);
    if (!deletedForum) {
      return res.status(404).json({ message: 'Forum not found' });
    }
    res.status(201).json(deletedForum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
