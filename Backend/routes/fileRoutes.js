import express from "express";
import { deleteFile, downloadFile, getAllFiles, uploadFile } from "../controller/fileController.js";
import authMiddleware from "../middleware/authMiddleware.js"; // Authentication middleware
import upload from "../middleware/uploadMiddleware.js"; // Middleware for file handling

const router = express.Router();

// Upload a file (protected route)
router.post("/upload", authMiddleware, upload.single("file"), uploadFile);

// Get all files (protected route)
router.get("/", authMiddleware, getAllFiles);

// Download a file by ID (protected route)
router.get("/download/:id", authMiddleware, downloadFile);

// Delete a file by ID (protected route)
router.delete("/:id", authMiddleware, deleteFile);

export default router;