import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  // Personal Details
  fullName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  contactInfo: {
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    }
  },
  address: {
      type: String,
      required:true,
  },
  profilePicture: {
    type: String // URL to the profile picture or file path
  },

  // Professional Details
  employeeID: {
    type: String,
    required: true,
    unique: true
  },
  joiningDate: {
    type: Date,
    required: true
  },
  department: {
    type: String,
    enum: ['HR', 'IT', 'Finance', 'Other'],
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  reportingManager: {
    type: String
  },
  employmentType: {
    type: String,
    enum: ['Full-Time', 'Part-Time', 'Contract', 'Intern'],
    required: true
  },
  workLocation: {
    type: String,
    enum: ['Remote', 'In-Office'],
    required: true
  },

  // Account & Credentials
  companyEmail: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true // Store hashed password in DB
  },
  roleBasedAccessLevel: {
    type: String,
    enum: ['Admin', 'User', 'Manager', 'Other'],
    required: true
  },
  accountStatus: {
    type: String,
    enum: ['Active', 'On Leave', 'Resigned'],
    default: 'Active'
  },

  // Bank & Salary Information
  bankAccountNumber: {
    type: String
  },
  salaryStructure: {
    basicPay: {
      type: Number,
      required: true
    },
    deductions: {
      type: Number
    },
    benefits: {
      type: Number
    }
  },
  taxInformation: {
      type: Number
  },

  // Emergency Contact Details
  emergencyContact: {
    name: {
      type: String
    },
    relationship: {
      type: String
    },
    contactNumber: {
      type: String
    }
  }

}, { timestamps: true });

const EmployeeModel = mongoose.model('Employee', employeeSchema);

export default EmployeeModel;