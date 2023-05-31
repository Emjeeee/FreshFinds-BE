import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./router/UserRoute.js";
import RecipeRoute from "./router/RecipeRoute.js";
import multer from "multer";

const app = express();
const port = 5000;

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/FreshFinds', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected!'));

// Enable CORS
app.use(cors());

app.use(express.json());
app.use("/users", UserRoute);
app.use("/recipes", RecipeRoute);
const upload = multer({ dest: "uploads/" });

// Update the following line to use the "upload" middleware
app.use(upload.single("image"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
