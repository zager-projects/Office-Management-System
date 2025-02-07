import express from "express" ;
import {registerAdmin , loginAdmin , registerEmployee } from "../controller/adminController.js";
import  verifyAdmin from "../middleware/authMiddleware.js";

const router = express.Router();
// 📌 Define Routes
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.post("/register-employee", verifyAdmin, registerEmployee);

export default router;
