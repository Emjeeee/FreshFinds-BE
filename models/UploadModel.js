import mongoose from "mongoose";

const UploadSchema = mongoose.Schema({
  filename: String,
  contentType: String,
});

const UploadModel = mongoose.model("Upload", UploadSchema);

export default UploadModel;
