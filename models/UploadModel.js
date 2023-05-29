import mongoose from "mongoose";

const uploadSchema = mongoose.Schema({
  filename : String,
  contentType : String,
});

const UploadModel = mongoose.model("Upload", uploadSchema);

export default UploadModel;