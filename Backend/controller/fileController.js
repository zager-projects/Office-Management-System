import fs from "fs";
import File from "../models/File.js";

// Upload File
export const uploadFile = async (req, res) => {
try {
    if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
    }

    const newFile = new File({
    filename: req.file.filename,
    filepath: req.file.path,
      uploadedBy: req.user.id, // Ensure user authentication middleware is applied
    });

    await newFile.save();
    res.status(201).json({ message: "File uploaded successfully", file: newFile });
} catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
}
};

// Get All Files
export const getAllFiles = async (req, res) => {
try {
    const files = await File.find().populate("uploadedBy", "name email");
    res.status(200).json(files);
} catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
}
};

// Download File
export const downloadFile = async (req, res) => {
try {
    const file = await File.findById(req.params.id);
    if (!file) {
    return res.status(404).json({ message: "File not found" });
    }
    res.download(file.filepath, file.filename);
} catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
}
};

// Delete File
export const deleteFile = async (req, res) => {
try {
    const file = await File.findById(req.params.id);
    if (!file) {
    return res.status(404).json({ message: "File not found" });
    }

    // Remove file from the storage
    fs.unlinkSync(file.filepath);

    await File.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "File deleted successfully" });
} catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
}
};
