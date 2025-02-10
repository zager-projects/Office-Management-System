import React, { useState } from 'react';
import { primaryColor } from '../Constants/theme';
import axios from 'axios';

const EmployeeAddForm = () => {
   // Personal Details
   const [fullName, setFullName] = useState('');
   const [dateOfBirth, setDateOfBirth] = useState('');
   const [gender, setGender] = useState('');
   const [phone, setPhone] = useState('');
   const [email, setEmail] = useState('');
   const [address, setAddress] = useState('');
   const [profilePicture, setProfilePicture] = useState("https://images.unsplash.com/photo-1495446815901-a7297e633e8d");
 
   // Professional Details
   const [employeeID, setEmployeeID] = useState('');
   const [joiningDate, setJoiningDate] = useState('');
   const [department, setDepartment] = useState('');
   const [designation, setDesignation] = useState('');
   const [reportingManager, setReportingManager] = useState('');
   const [employmentType, setEmploymentType] = useState('');
   const [workLocation, setWorkLocation] = useState('');
 
   // Account & Credentials
   const [companyEmail, setCompanyEmail] = useState('');
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [roleBasedAccessLevel, setRoleBasedAccessLevel] = useState('');
   const [accountStatus, setAccountStatus] = useState('');
 
   // Bank & Salary Information
   const [bankAccountNumber, setBankAccountNumber] = useState('');
   const [basicPay, setBasicPay] = useState('');
   const [deductions, setDeductions] = useState('');
   const [benefits, setBenefits] = useState('');
   const [taxInformation, setTaxInformation] = useState('');
 
   // Emergency Contact
   const [name, setName] = useState('');
   const [relationship, setRelationship] = useState('');
   const [contactNumber, setcontactNumber] = useState('');
 
   const handleSubmit = async (e) => {
     e.preventDefault();
     
     try {
        const token = localStorage.getItem('adminToken');
        // console.log("Token: " + token);

        const formData = {
          fullName,
          dateOfBirth, // This will be automatically parsed by MongoDB
          gender: gender.charAt(0).toUpperCase() + gender.slice(1), // Capitalize first letter
          contactInfo: {
            phone,
            email,
          },
          address,
          profilePicture,
          employeeID,
          joiningDate,
          department: department.toUpperCase(), // Convert to match enum
          designation,
          reportingManager,
          employmentType: employmentType.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('-'), // Convert "full-time" to "Full-Time"
          workLocation: workLocation === 'in-office' ? 'In-Office' : 'Remote',
          companyEmail,
          username,
          password,
          roleBasedAccessLevel: roleBasedAccessLevel.charAt(0).toUpperCase() + roleBasedAccessLevel.slice(1),
          accountStatus: accountStatus.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '), // Convert "on-leave" to "On Leave"
          bankAccountNumber,
          salaryStructure: {
            basicPay: Number(basicPay),
            deductions: Number(deductions),
            benefits: Number(benefits),
          },
          taxInformation,
          emergencyContact: {
            name,
            relationship,
            contactNumber,
          }
        };
    
       const response = await fetch('http://localhost:3000/api/admin/register-employee', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`,
         },
         body: JSON.stringify(formData),
       });
 
       if (response.ok) {
         alert('Employee registration successful');
         // Reset all form fields
       } else {
         alert('Employee registration failed');
       }
     } catch (error) {
       console.error('Error:', error);
       alert('Employee registration failed');
     }
   };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Employee Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Personal Details */}
        <h3 style={{color:primaryColor}} className="text-xl font-semibold">Personal Details</h3>
        <hr/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Information (Phone)</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input
            readOnly
              // type="file"
              value={profilePicture}
              // onChange={(e) => setProfilePicture(e.target.files[0])}
              placeholder=''
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        {/* Professional Details */}
        {/* <> */}
        <h3 style={{color:primaryColor}} className="text-xl font-semibold">Professional Details</h3>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Employee ID</label>
            <input
              type="text"
              value={employeeID}
              onChange={(e) => setEmployeeID(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Joining Date</label>
            <input
              type="date"
              value={joiningDate}
              onChange={(e) => setJoiningDate(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Department</label>
            {/* <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            /> */}
            <select
  value={department}
  onChange={(e) => setDepartment(e.target.value)}
  required
  className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
>
  <option value="">Select Department</option>
  <option value="HR">HR</option>
  <option value="IT">IT</option>
  <option value="Finance">Finance</option>
  <option value="Other">Other</option>
</select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Designation</label>
            <input
              type="text"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Reporting Manager</label>
            <input
              type="text"
              value={reportingManager}
              onChange={(e) => setReportingManager(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Employment Type</label>
            <select
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Select Employment Type</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="contract">Contract</option>
              <option value="intern">Intern</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Work Location</label>
            <select
              value={workLocation}
              onChange={(e) => setWorkLocation(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Select Work Location</option>
              <option value="remote">Remote</option>
              <option value="in-office">In-Office</option>
            </select>
          </div>
        </div>

        {/* Account & Credentials */}
        <h3 style={{color:primaryColor}} className="text-xl font-semibold">Account & Credentials</h3>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Email</label>
            <input
              type="email"
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text -sm font-medium text-gray-700">Role-based Access Level</label>
            <input
              type="text"
              value={roleBasedAccessLevel}
              onChange={(e) => setRoleBasedAccessLevel(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Account Status</label>
            <select
              value={accountStatus}
              onChange={(e) => setAccountStatus(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Select Account Status</option>
              <option value="active">Active</option>
              <option value="on-leave">On Leave</option>
              <option value="resigned">Resigned</option>
            </select>
          </div>
        </div>

        {/* Bank & Salary Information */}
        <h3 style={{color:primaryColor}} className="text-xl font-semibold">Bank & Salary Information</h3>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Bank Account Number</label>
            <input
              type="text"
              value={bankAccountNumber}
              onChange={(e) => setBankAccountNumber(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Salary Structure</label>
            <textarea
              value={salaryStructure}
              onChange={(e) => setSalaryStructure(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div> */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Basic pay</label>
            <input type="number"
            value={basicPay}
            onChange={(e) => setBasicPay(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"  />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Dedeuctions</label>
            <input type="number"
            value={deductions}
            onChange={(e) => setDeductions(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"  />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Benefits</label>
            <input type="number"
            value={benefits}
            onChange={(e) => setBenefits(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"  />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tax Information</label>
            <textarea
              value={taxInformation}
              onChange={(e) => setTaxInformation(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        {/* Emergency Contact Details */}
        <h3 style={{color:primaryColor}} className="text-xl font-semibold">Emergency Contact Details</h3>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Relationship</label>
            <input
              type="text"
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              value={contactNumber}
              onChange={(e) => setcontactNumber(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            style={{backgroundColor:primaryColor}}
            className="w-full text-white font-semibold py-2 cursor-pointer rounded-md hover:opacity-90 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeAddForm;