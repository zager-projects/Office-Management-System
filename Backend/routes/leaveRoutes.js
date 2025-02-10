import express from "express";
const router = express.Router();
import { createLeaveRequest, getAllLeaveRequests, updateLeaveRequestStatus, getEmployeeLeaveRequests } from "../controller/leaveController.js"; // 

// POST /api/leave
router.post('/leaveformapplication', createLeaveRequest);

router.get('/leavedashboardadmin',getAllLeaveRequests);

router.put('/updatestatus/:id', updateLeaveRequestStatus);

router.get('/employeeleave/:emailId', getEmployeeLeaveRequests);

export default router;