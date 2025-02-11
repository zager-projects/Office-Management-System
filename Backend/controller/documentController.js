const Document = require("../models/Document");
const multer = require("multer");
const path = require("path");

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// Upload a document
const uploadDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const newDocument = new Document({
      filename: req.file.originalname,
      fileUrl: `/uploads/${req.file.filename}`,
      uploadedBy: req.user.id, // Assuming user info is available from auth middleware
    });

    await newDocument.save();
    console.log(res.body);
    res.status(201).json({ message: "File uploaded successfully", newDocument });
  } catch (error) {
    res.status(500).json({ message: "Error uploading file", error });
  }
};

// Get all documents
const getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.find().populate("uploadedBy", "name");
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ message: "Error fetching documents", error });
  }
};

// Download a document
const downloadDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) return res.status(404).json({ message: "Document not found" });

    res.download(`./uploads/${document.fileUrl.split("/").pop()}`);
  } catch (error) {
    res.status(500).json({ message: "Error downloading file", error });
  }
};

module.exports = { upload, uploadDocument, getAllDocuments, downloadDocument };
