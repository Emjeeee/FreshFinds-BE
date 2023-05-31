import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./router/UserRoute.js";
import RecipeRoute from "./router/RecipeRoute.js";
import { storage, upload } from "./middleware/storageConfig.js";


const app = express();
mongoose.connect('mongodb://localhost:27017/FreshFinds', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected!'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(RecipeRoute);
app.use(upload.single("image"));

app.listen(5000, ()=> console.log('Server is Running!'));