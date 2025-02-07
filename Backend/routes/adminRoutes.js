import express from "express" ;
// import adminController from "../controller/adminController.js";
import { registerAdmin, loginAdmin, registerEmployee } from "../controller/adminController.js";
import  verifyAdmin from "../middleware/authMiddleware.js";

const router = express.Router();
// 📌 Define Routes
// router.post("/register", adminController.registerAdmin);
// router.post("/login", adminController.loginAdmin);
// router.post("/register-employee", verifyAdmin, adminController.registerEmployee);

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.post("/register-employee", verifyAdmin, registerEmployee);

// module.exports = router;
export default router
