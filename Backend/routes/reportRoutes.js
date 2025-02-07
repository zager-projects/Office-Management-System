import express from "express";
import { generateAttendanceReport, generatePayrollReport, generatePerformanceReport } from "../controller/reportController.js";
import { verifyAdmin } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get("/attendance", verifyAdmin, generateAttendanceReport);
router.get("/payroll", verifyAdmin, generatePayrollReport);
router.get("/performance", verifyAdmin, generatePerformanceReport);

export default router;
