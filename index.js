import express from "express";
import mongoose from "mongoose";
import cors from "cors";
<<<<<<< HEAD
import UserRoute from "./routes/UserRoute.js";
import RecipeRoute from "./routes/RecipeRoute.js";
import { uploadImage } from "./middleware/storageConfig.js";
=======
import UserRoute from "./router/UserRoute.js";
import RecipeRoute from "./router/RecipeRoute.js";
import { storage, upload } from "./middleware/storageConfig.js";

>>>>>>> 99ed44d6d100e21b0dd5cedd2a1889e267d9e526

const app = express();
mongoose.connect('mongodb://localhost:27017/FreshFinds', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected!'));

app.use(cors());
app.use(express.json());
app.use("/users", UserRoute);
app.use("/recipes", RecipeRoute);
app.use(uploadImage);

<<<<<<< HEAD
app.listen(5000, () => console.log('Server is running on port 5000!'));
=======
app.listen(5001, ()=> console.log('Server is Running!'));
>>>>>>> 99ed44d6d100e21b0dd5cedd2a1889e267d9e526
