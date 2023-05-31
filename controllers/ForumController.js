import Forum from "../models/ForumModel.js";

// get all Forum data

export const getForum = async (req, res) => {
    try{
        const forum = await Forum.find();
        res.json(forum);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

// function get Forum data by id

export const getForumById = async (req, res) => {
    try{
        const forum = await Forum.findById(req.params.id);
        res.json(user); 
    }
    catch (error){
        res.status(404).json({message: error.message});
    }
}

// function post data Forum

export const saveForum = async (req, res) => {
    const forum = new Forum(req.body);
    try{
        const insertedForum = await user.save(req.params.id);
        req.status(201).json(insertedForum);
    } 
    catch (error) {
        res.status(400).json({message: error.message});
    }
}

// function update forum

export const updateForum = async (req, res) => {
    try{
        const updatedForum = await Forum.updateOne({ _id: req.params.id}, { $set: req.body});
        res.status(201).json(updatedForum);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
}

// function delete user

export const deleteForum = async (req, res) => {
    try {
        const deletedForum = await Forum.deleteOne({ _id: req.params.id});
        res.status(201).json(deleteForum);
    }
    catch (error) {
        res.status(400).json({ message: error.message});
    }
}