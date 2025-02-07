import React, { useState } from 'react';
import { primaryColor } from '../Constants/theme';
const EmployeeForm = () => {
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [employeeId, setEmployeeId] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [department, setDepartment] = useState('');
  const [designation, setDesignation] = useState('');
  const [reportingManager, setReportingManager] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [workLocation, setWorkLocation] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [roleAccessLevel, setRoleAccessLevel] = useState('');
  const [accountStatus, setAccountStatus] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [salaryStructure, setSalaryStructure] = useState('');
  const [taxInformation, setTaxInformation] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactRelationship, setEmergencyContactRelationship] = useState('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      fullName,
      dateOfBirth,
      gender,
      phone,
      email,
      address,
      profilePicture,
      employeeId,
      joiningDate,
      department,
      designation,
      reportingManager,
      employmentType,
      workLocation,
      companyEmail,
      username,
      password,
      roleAccessLevel,
      accountStatus,
      bankAccountNumber,
      salaryStructure,
      taxInformation,
      emergencyContactName,
      emergencyContactRelationship,
      emergencyContactNumber,
    });
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
              type="file"
              onChange={(e) => setProfilePicture(e.target.files[0])}
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
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
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
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
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
              value={roleAccessLevel}
              onChange={(e) => setRoleAccessLevel(e.target.value)}
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
          <div>
            <label className="block text-sm font-medium text-gray-700">Salary Structure</label>
            <textarea
              value={salaryStructure}
              onChange={(e) => setSalaryStructure(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
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
              value={emergencyContactName}
              onChange={(e) => setEmergencyContactName(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Relationship</label>
            <input
              type="text"
              value={emergencyContactRelationship}
              onChange={(e) => setEmergencyContactRelationship(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              value={emergencyContactNumber}
              onChange={(e) => setEmergencyContactNumber(e.target.value)}
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

export default EmployeeForm;