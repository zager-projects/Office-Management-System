import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Attendance", "Payroll", "Performance"],
    required: true
  },
  generatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  filePath: {
    type: String // Path to the generated PDF or Excel file
  }
});

const Report = mongoose.model("Report", reportSchema);
export default Report;
