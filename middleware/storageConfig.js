import path from "path";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    // Update the destination path to an absolute path
    return cb(null, path.join("../uploads"));
  },
  filename: function(req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

export function storageConfig(req, res, next) {
  // Use multer middleware for handling file uploads
  upload.array("files")(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred
      return res.status(500).json({ error: err.message });
    } else if (err) {
      // An unknown error occurred
      return res.status(500).json({ error: "Unknown error occurred" });
    }
    next();
  });
}
