import Admin from "../models/AdminModel.js";
import Employee from "../models/Employee.js";

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// ✅ Admin Registration
export const registerAdmin = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) return res.status(400).json({ message: "Admin already exists" });

    const newAdmin = new Admin({ username, email, password });
    await newAdmin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message)
  }
};

// ✅ Admin Login
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: "Admin not found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Only Admin Can Register New Employees
export const registerEmployee = async (req, res) => {
  try {
    const { password, ...employeeData } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newEmployee = new Employee({ ...employeeData, password: hashedPassword });

    await newEmployee.save();
    res.status(201).json({ message: "Employee registered successfully", employee: newEmployee });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
