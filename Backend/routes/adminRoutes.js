import express from "express" ;
import adminController from "../controllers/adminController";
import  verifyAdmin from "../middlewares/authMiddleware";

const router = express.Router();
// 📌 Define Routes
router.post("/register", adminController.registerAdmin);
router.post("/login", adminController.loginAdmin);
router.post("/register-employee", verifyAdmin, adminController.registerEmployee);

module.exports = router;
