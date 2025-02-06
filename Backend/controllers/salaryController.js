const Salary = require("../models/Salary");
const Employee = require("../models/User");

// Create salary record
const createSalary = async (req, res) => {
    try {
        const { employeeId, basicSalary, taxDeductions, bonuses } = req.body;

        const netSalary = basicSalary - taxDeductions + bonuses;

        const newSalary = new Salary({
            employeeId,
            basicSalary,
            taxDeductions,
            bonuses,
            netSalary
        });

        await newSalary.save();
        res.status(201).json({ message: "Salary record created successfully", salary: newSalary });

    } catch (error) {
        res.status(500).json({ message: "Error creating salary record", error: error.message });
    }
};

// Get all salaries
const getSalaries = async (req, res) => {
    try {
        const salaries = await Salary.find().populate("employeeId", "name department");
        res.status(200).json(salaries);
    } catch (error) {
        res.status(500).json({ message: "Error fetching salaries", error: error.message });
    }
};

// Get salary by Employee ID
const getSalaryByEmployee = async (req, res) => {
    try {
        const { employeeId } = req.params;
        const salaries = await Salary.find({ employeeId }).populate("employeeId", "name department");

        if (!salaries) {
            return res.status(404).json({ message: "No salary records found for this employee" });
        }
        res.status(200).json(salaries);
    } catch (error) {
        res.status(500).json({ message: "Error fetching salary records", error: error.message });
    }
};

// Update salary record
const updateSalary = async (req, res) => {
    try {
        const { salaryId } = req.params;
        const updatedSalary = await Salary.findByIdAndUpdate(salaryId, req.body, { new: true });

        if (!updatedSalary) {
            return res.status(404).json({ message: "Salary record not found" });
        }
        res.status(200).json({ message: "Salary updated successfully", salary: updatedSalary });

    } catch (error) {
        res.status(500).json({ message: "Error updating salary record", error: error.message });
    }
};

// Delete salary record
const deleteSalary = async (req, res) => {
    try {
        const { salaryId } = req.params;
        const deletedSalary = await Salary.findByIdAndDelete(salaryId);

        if (!deletedSalary) {
            return res.status(404).json({ message: "Salary record not found" });
        }
        res.status(200).json({ message: "Salary deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: "Error deleting salary record", error: error.message });
    }
};

module.exports = { createSalary, getSalaries, getSalaryByEmployee, updateSalary, deleteSalary };
