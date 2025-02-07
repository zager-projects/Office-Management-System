import EmployeeModel from "../models/Employee.js"; // Import Employee Schema
import bcrypt from "bcryptjs"; // Import bcrypt for password hashing

// ✅ Create Employee
const createEmployee = async (req, res) => {
  console.log(req.body);
  try {
    const { password, ...employeeData } = req.body;

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // ✅ Create employee using EmployeeModel
    const newEmployee = new EmployeeModel({ ...employeeData, password: hashedPassword });
    
    console.log(newEmployee);
    
    // ✅ Save employee to database
    await newEmployee.save();

    res.status(201).json({ success: true, message: "Employee created successfully", employee: newEmployee });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ✅ Get All Employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await EmployeeModel.find();
    res.status(200).json({ success: true, employees });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get Single Employee by ID
const getEmployeeById = async (req, res) => {
  console.log(req.body);
  try {
    const employee = await EmployeeModel.findOne({ employeeID: req.params.id });
    console.log(employee);
    if (!employee) return res.status(404).json({ success: false, message: "Employee not found" });

    res.status(200).json({ success: true, employee });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Update Employee
const updateEmployee = async (req, res) => {
  console.log("Update Request Body:", req.body);
  
  try {
    const { password, ...updateData } = req.body;

    // Hash new password if provided
    if (password) updateData.password = await bcrypt.hash(password, 10);

    // Find employee by employeeID and update
    const updatedEmployee = await EmployeeModel.findOneAndUpdate(
      { employeeID: req.params.id }, // Find by employeeID instead of _id
      updateData,
      { new: true }
    );

    console.log("Updated Employee:", updatedEmployee);

    if (!updatedEmployee) {
      return res.status(404).json({ success: false, message: "Employee not found" });
    }

    res.status(200).json({ success: true, message: "Employee updated successfully", employee: updatedEmployee });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// ✅ Delete Employee
const deleteEmployee = async (req, res) => {
  try {
    const employee = await EmployeeModel.findOneAndDelete({ employeeID: req.params.id }); // Use findOneAndDelete()

    if (!employee) {
      return res.status(404).json({ success: false, message: "Employee not found" });
    }

    res.status(200).json({ success: true, message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export { createEmployee , getAllEmployees , getEmployeeById , updateEmployee, deleteEmployee} 