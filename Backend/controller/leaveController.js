import Leave from "../models/leaveModel.js"; // ✅ Use ES module import

// Create a leave request
export const createLeaveRequest = async (req, res) => {
    try {
        const { username, leaveType, leaveStartDate, leaveEndDate, reason, emailId } = req.body;

        // Create a new leave document
        const leaveRequest = new Leave({
            username,
            leaveType,
            leaveStartDate,
            leaveEndDate,
            reason,
            emailId
        });

        // Save the leave request to the database
        await leaveRequest.save();
        res.status(201).json({ message: 'Leave request created successfully', leaveRequest });
    } catch (err) {
        res.status(500).json({ error: 'Error creating leave request' });
    }
};

// Fetch all leave requests
export const getAllLeaveRequests = async (req, res) => {
    try {
        const leaveRequests = await Leave.find();
        res.status(200).json(leaveRequests);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching leave requests' });
    }
};

// Update leave request status
export const updateLeaveRequestStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({ message: "Status is required" });
        }

        const updatedLeave = await Leave.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!updatedLeave) {
            return res.status(404).json({ message: "Leave request not found" });
        }

        res.json(updatedLeave);
    } catch (error) {
        console.error('Error updating leave status:', error);
        res.status(500).json({ message: error.message });
    } 
};

// Get employee leave requests
export const getEmployeeLeaveRequests = async (req, res) => {
    try {
        const { emailId } = req.params;
        const leaves = await Leave.find({ emailId });
        res.json(leaves);
    } catch (error) {
        console.error('Error fetching employee leaves:', error);
        res.status(500).json({ message: error.message });
    }
};
