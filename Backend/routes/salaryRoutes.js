import express from "express";
import { protect, admin } from "../config/authMiddleware.js";  // ✅ Use named imports

import { 
    createSalary, 
    getSalaries, 
    getSalaryByEmployee, 
    updateSalary, 
    deleteSalary 
} from "../controller/salaryController.js"; 

const router = express.Router();

// Routes for salary management
router.post("/create", protect, admin, createSalary);
router.get("/", protect, getSalaries);
router.get("/:employeeId", protect, getSalaryByEmployee);
router.put("/:salaryId", protect, admin, updateSalary);
router.delete("/:salaryId", protect, admin, deleteSalary);

export default router;
