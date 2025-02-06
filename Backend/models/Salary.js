const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    basicSalary: { type: Number, required: true },
    taxDeductions: { type: Number, default: 0 },
    bonuses: { type: Number, default: 0 },
    netSalary: { type: Number, required: true },
    paymentDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Salary", salarySchema);
