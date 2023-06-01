import Forum from "../models/ForumModel.js";

// Get all forum data
export const getForum = async (req, res) => {
  try {
    const forum = await Forum.find();
    res.json(forum);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get forum data by ID
export const getForumById = async (req, res) => {
  try {
    const forum = await Forum.findById(req.params.id);
    res.json(forum);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create a new forum
export const saveForum = async (req, res) => {
  const forum = new Forum(req.body);
  try {
    const insertedForum = await forum.save();
    res.status(201).json(insertedForum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a forum
export const updateForum = async (req, res) => {
  try {
    const updatedForum = await Forum.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(201).json(updatedForum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a forum
export const deleteForum = async (req, res) => {
  try {
    const deletedForum = await Forum.deleteOne({ _id: req.params.id });
    res.status(201).json(deletedForum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
