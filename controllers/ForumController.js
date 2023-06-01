import Forum from "../models/ForumModel.js";

// Get all Forum data
export const getForum = async (req, res) => {
  try {
    const forum = await Forum.find().populate("user");
    res.json(forum);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Forum data by ID
export const getForumById = async (req, res) => {
  try {
    const forum = await Forum.findById(req.params.id).populate("user");
    res.json(forum);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create a new Forum
export const saveForum = async (req, res) => {
  const { user, content, image } = req.body;
  const forum = new Forum({
    user,
    content,
    image
  });
  try {
    const insertedForum = await forum.save();
    res.status(201).json(insertedForum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a Forum
export const updateForum = async (req, res) => {
  try {
    const updatedForum = await Forum.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
