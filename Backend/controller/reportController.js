import Report from "../models/Report.js";
import Employee from "../models/Employee.js";
import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";
import ExcelJS from "exceljs";

// ✅ Generate Attendance Report (PDF & Excel)
export const generateAttendanceReport = async (req, res) => {
  try {
    const employees = await Employee.find();
    
    // Generate PDF Report
    const pdfDoc = new PDFDocument();
    const pdfPath = `./reports/Attendance_Report_${Date.now()}.pdf`;
    pdfDoc.pipe(fs.createWriteStream(pdfPath));
    pdfDoc.text("Attendance Report", { align: "center" });
    employees.forEach(emp => {
      pdfDoc.text(`${emp.fullName} - Status: ${emp.accountStatus}`);
    });
    pdfDoc.end();

    // Generate Excel Report
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Attendance");
    worksheet.addRow(["Full Name", "Status"]);
    employees.forEach(emp => worksheet.addRow([emp.fullName, emp.accountStatus]));

    const excelPath = `./reports/Attendance_Report_${Date.now()}.xlsx`;
    await workbook.xlsx.writeFile(excelPath);

    // Save Report to Database
    const report = new Report({ type: "Attendance", generatedBy: req.admin.id, filePath: pdfPath });
    await report.save();

    res.status(200).json({ message: "Attendance report generated", pdfPath, excelPath });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Generate Payroll Report (PDF & Excel)
export const generatePayrollReport = async (req, res) => {
  try {
    const employees = await Employee.find();

    // Generate PDF Report
    const pdfDoc = new PDFDocument();
    const pdfPath = `./reports/Payroll_Report_${Date.now()}.pdf`;
    pdfDoc.pipe(fs.createWriteStream(pdfPath));
    pdfDoc.text("Payroll Report", { align: "center" });
    employees.forEach(emp => {
      pdfDoc.text(`${emp.fullName} - Salary: ${emp.salaryStructure.basicPay}`);
    });
    pdfDoc.end();

    // Generate Excel Report
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Payroll");
    worksheet.addRow(["Full Name", "Salary"]);
    employees.forEach(emp => worksheet.addRow([emp.fullName, emp.salaryStructure.basicPay]));

    const excelPath = `./reports/Payroll_Report_${Date.now()}.xlsx`;
    await workbook.xlsx.writeFile(excelPath);

    // Save Report to Database
    const report = new Report({ type: "Payroll", generatedBy: req.admin.id, filePath: pdfPath });
    await report.save();

    res.status(200).json({ message: "Payroll report generated", pdfPath, excelPath });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Generate Performance Report (PDF & Excel)
export const generatePerformanceReport = async (req, res) => {
  try {
    const employees = await Employee.find();

    // Generate PDF Report
    const pdfDoc = new PDFDocument();
    const pdfPath = `./reports/Performance_Report_${Date.now()}.pdf`;
    pdfDoc.pipe(fs.createWriteStream(pdfPath));
    pdfDoc.text("Performance Report", { align: "center" });
    employees.forEach(emp => {
      pdfDoc.text(`${emp.fullName} - Performance Score: 85/100`);
    });
    pdfDoc.end();

    // Generate Excel Report
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Performance");
    worksheet.addRow(["Full Name", "Performance Score"]);
    employees.forEach(emp => worksheet.addRow([emp.fullName, "85/100"]));

    const excelPath = `./reports/Performance_Report_${Date.now()}.xlsx`;
    await workbook.xlsx.writeFile(excelPath);

    // Save Report to Database
    const report = new Report({ type: "Performance", generatedBy: req.admin.id, filePath: pdfPath });
    await report.save();

    res.status(200).json({ message: "Performance report generated", pdfPath, excelPath });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
