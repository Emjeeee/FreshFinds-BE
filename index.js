import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import RecipeRoute from "./routes/RecipeRoute.js";
import { uploadImage } from "./middleware/storageConfig.js";

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

app.listen(5000, () => console.log('Server is running on port 5000!'));
