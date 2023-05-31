import path from "path";
import express from "express";
import multer from "multer";

const app = express();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    // Update the destination path to an absolute path
    return cb(null, path.resolve(__dirname, "../uploads"));
  },
  filename: function(req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

app.set("view engine", "ejs");
app.set("views", path.resolve("../views"));

// Use multer middleware for handling file uploads
app.use(upload.array("files"));

// Encode URL
app.use(express.urlencoded({ extended: false }));

// Route for the root URL
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Route for file upload
app.post("/upload", (req, res) => {
  console.log(req.body);
  console.log(req.file);

  return res.redirect("/");
});

export default app;
