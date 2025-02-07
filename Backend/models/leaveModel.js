import mongoose from "mongoose"; // ✅ Use ES module import

// Define schema
const leaveSchema = new mongoose.Schema({
    username: { type: String, required: true },
    emailId: { type: String, required: true, lowercase: true },
    leaveType: { 
        type: String, 
        required: true, 
        enum: ['Sick Leave', 'Casual Leave', 'Vacation', 'Maternity/Paternity Leave'] 
    },
    leaveStartDate: { type: Date, required: true },
    leaveEndDate: { type: Date, required: true },
    reason: { type: String, required: true },
    status: { 
        type: String, 
        default: 'Pending', 
        enum: ['Pending', 'Approved', 'Rejected'] 
    },
}, { timestamps: true });

// Export model as ES module
const Leave = mongoose.model("Leave", leaveSchema);
export default Leave;
