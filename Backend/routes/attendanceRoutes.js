import express from 'express';
import {
  recordAttendance,
  recordClockIn,
  recordClockOut,
  downloadReport,
  getAttendanceByDate,
  getEmployeeAttendance
} from '../controller/attendanceController.js';

const router = express.Router();

// Record attendance status
router.post('/record', recordAttendance);

// Record clock-in time
router.post('/clockin', recordClockIn);

// Record clock-out time
router.post('/clockout', recordClockOut);

// Download attendance report
router.get('/report', downloadReport);

// Get attendance by date
router.get('/daily/:date', getAttendanceByDate);

// Get employee attendance by month
router.get('/employee/:userId/:month', getEmployeeAttendance);

export default router;
