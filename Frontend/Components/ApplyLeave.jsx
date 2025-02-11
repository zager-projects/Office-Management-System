import React, { useState } from 'react';
import { primaryColor } from '../Constants/theme';
import axios from 'axios';

const ApplyLeave = () => {
  const [username, setUsername] = useState('');
  const [emailId, setEmailId] = useState('');
  const [leaveStartDate, setLeaveStartDate] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [leaveEndDate, setleaveEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username, emailId, leaveType, leaveStartDate, leaveEndDate, reason);

    try {
      const response = await axios.post('http://localhost:3000/api/leave/leaveformapplication', {
        username,
        leaveType,
        emailId,
        leaveStartDate,
        leaveEndDate,
        reason
      });
      if (response.status === 201) {
        alert('Leave request submitted successfully');
        // Reset form fields
        setUsername('');
        setEmailId('');
        setLeaveType('');
        setLeaveStartDate('');
        setleaveEndDate('');
        setReason('');
      } else {
        alert('Failed to submit leave request');
      }
    } catch (error) {
      console.error('Error submitting leave request:', error);
      alert('Error submitting leave request');
    }
  };

  return (
    <div className="mt-20 from-blue-400 to-purple-500 flex items-center justify-center px-4">
      <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg w-[50%]">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">Apply for Leave</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="leaveType">
              Leave Type
            </label>
            <select
              id="leaveType"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select leave type</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Vacation">Annual Leave</option>
            </select>
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              value={leaveStartDate}
              onChange={(e) => setLeaveStartDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              value={leaveEndDate}
              onChange={(e) => setleaveEndDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reasons">
              Reasons
            </label>
            <textarea
              id="reasons"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter the reasons for leave"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              style={{ backgroundColor: primaryColor }}
              className="text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full focus:outline-none focus:shadow-outline w-full"
            >
              Apply Leave
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyLeave;