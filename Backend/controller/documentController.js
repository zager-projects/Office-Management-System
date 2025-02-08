const Document = require("../models/Document");
const multer = require("multer");
const path = require("path");

// Set up storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store files in the uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Upload a file
exports.uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const newDocument = new Document({
      filename: req.file.filename,
      fileUrl: `/uploads/${req.file.filename}`,
      uploadedBy: req.user.id,
    });

    await newDocument.save();
    res.status(201).json({ message: "File uploaded successfully", document: newDocument });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all uploaded files
exports.getAllFiles = async (req, res) => {
  try {
    const documents = await Document.find().populate("uploadedBy", "name");
    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete a file
exports.deleteFile = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "File not found" });
    }

    await Document.findByIdAndDelete(req.params.id);
    res.json({ message: "File deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
