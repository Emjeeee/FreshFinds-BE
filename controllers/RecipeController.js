import Recipe from "../models/RecipeModel.js";
// import Upload from "../models/UploadModel.js";
import { default as Upload } from "../models/UploadModel.js";

import multer from "multer";

// Function to Get all Recipes

export const getRecipes = async (req, res) => {
    try{
        const recipes = await Recipe.find();
        res.json(recipes);
    }
    catch (error){
        res.status(500).json({message: error.message});
    }
};

export const getRecipeById = async (req, res) => {
    try{
        const recipe = await Recipe.findById(req.params.id);
        res.json(recipe);
    }
    catch (error) {
        res.status(404).json({ message : error.message });
    }
};

export const saveRecipe = async (req, res) => {
    const recipe = new Recipe(req.body);
    try {
        const savedRecipe = await recipe.save();

        // Check if file is present in the request
        if (req.file) {
            const upload = new Upload({
                filename: req.file.filename,
                contentType: req.file.contentType,
            });

            const savedUpload = await upload.save();

            // Assign the uploaded file's ID to the image field in the recipe model
            savedRecipe.image = savedUpload._id;
            await savedRecipe.save();
        }

        res.status(201).json(savedRecipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const updateRecipe = async (req, res) => {
    try{
        const updateRecipe = await Recipe.updateOne(
            { _id: req.params.id},
            { $set: req.body}
        );
        res.status(201).json(updateRecipe);
    } catch (error){
        res.status(400).json({ message: error.message});
    }
};

export const deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.deleteOne({ _id: req.params.id });
        res.status(201).json(deletedRecipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



const upload = multer().single("image");
export { upload as uploadImage };
