import express from 'express'
import {createEmployee, getAllEmployees , getEmployeeById, updateEmployee, deleteEmployee} from '../controllers/employeeController.js';
const employeeController = require("../controllers/employeeController");

const router = express.Router();

// 📌 Define Routes
router.post("/create", createEmployee);
router.get("/list", getAllEmployees);
router.get("/:id", getEmployeeById);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;
