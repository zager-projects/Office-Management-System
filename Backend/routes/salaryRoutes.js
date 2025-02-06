const express = require("express");
const router = express.Router();
const { createSalary, getSalaries, getSalaryByEmployee, updateSalary, deleteSalary } = require("../controllers/salaryController");
const { protect, admin } = require("../middleware/authMiddleware");

// Routes for salary management
router.post("/create", protect, admin, createSalary);
router.get("/", protect, getSalaries);
router.get("/:employeeId", protect, getSalaryByEmployee);
router.put("/:salaryId", protect, admin, updateSalary);
router.delete("/:salaryId", protect, admin, deleteSalary);

module.exports = router;
