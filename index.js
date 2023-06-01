import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./router/UserRoute.js";
import RecipeRoute from "./router/RecipeRoute.js";
import ForumRoute from "./router/ForumRoute.js";
import multer from "multer";
import path from "path";
import ejs from "ejs";

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

// Mount UserRoute
app.use("/", UserRoute);

// Mount RecipeRoute
app.use("/recipes", RecipeRoute);

// Mount ForumRoute
app.use("/forum", ForumRoute);

// Serve static files from the "uploads" directory
app.use(express.static(path.join("uploads")));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join("views"));

// Initialize multer middleware with destination and filename configuration
const storage = multer.diskStorage({
  destination: path.join("uploads"),
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    const extension = path.extname(file.originalname);
    cb(null, `${uniqueSuffix}${extension}`);
  }
});

// Create multer instance
const upload = multer({ storage });

// Route for file upload
app.post("/upload", upload.single("image"), (req, res) => {
  // Handle the file upload logic here
  console.log(req.file);
  console.log(req.body);
  res.redirect("/");
});

// Root route handler
app.get("/", (req, res) => {
  res.render("homepage");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
