import User from "../models/UserModel.js";

// get all user data

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

// function get user data by id

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    }
    catch (error) {
        res.status(404).json({message: error.message});
    }
}

// function post data

export const saveUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const insertedUser = await user.save(req.params.id);
        res.status(201).json(insertedUser);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
}

// function update user

export const updateUser = async (req, res) => {
    try {
        const updatedUser = await user.updateOne({_id:req.params.id}, {$set: req.body});
        // set is for request data to uodate a new one
        res.status(201).json(updatedUser);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
}

// function delete user

export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await user.deleteOne({_id:req.params.id});
        res.status(201).json(deletedUser);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
}