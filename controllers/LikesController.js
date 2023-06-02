import Likes from "../models/LikesModel.js";

// Get all Likes data
export const getLikes = async (req, res) => {
    try {
        const likes = await Likes.find().populate("forum");
        res.json(likes);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

// Get Likes data by ID
export const getLikesById = async (req, res) => {
    try {
        const likes = await Likes.findById(req.params.id).populate("forum");
        res.json(likes);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};

// Create a new Likes
export const saveLikes = async (req, res) => {
    const { forum, likeCount, create_at} = req.body;
    const likes = new Likes({
        forum,
        likeCount,
        create_at
    });
    try {
        const insertedLikes = await likes.save();
        res.status(201).json(insertedLikes);
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
};

// Update a Likes
export const updatedLikes = async (req, res) => {
    try{
        const updatedLikes = await Likes.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(updatedLikes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a Likes
export const deleteLikes = async (req, res) => {
    try {
        const deleteLikes = await Likes.findByIdAndDelete(req.params.id);
        res.status(201).json(deleteLikes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};