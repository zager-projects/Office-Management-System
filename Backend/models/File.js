import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  filename: {
     type: String,
     required: true

  },
  filepath: {
     type: String,
     required: true

  }, // Path where the file is stored
  uploadedBy: {
     type: mongoose.Schema.Types.ObjectId, ref: "User",
     required: true

  },
  uploadedAt: {
     type: Date,
     default: Date.now

  },
  accessLevel: {
     type: String,
     enum: ["public", "private"],
     default: "private"
 
  },
});

const File = mongoose.model("File", fileSchema);
export default File;
