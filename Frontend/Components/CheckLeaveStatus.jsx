import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CheckLeaveStatus = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/leaves');
        setLeaveRequests(response.data);
      } catch (error) {
        console.error('Error fetching leave requests:', error);
      }
    };

    fetchLeaveRequests();
  }, []);

  return (
    <div className="mt-20 from-blue-400 to-purple-500 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">Your Leave Status</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Username</th>
              <th className="py-2 px-4 border-b">Leave Type</th>
              <th className="py-2 px-4 border-b">Start Date</th>
              <th className="py-2 px-4 border-b">End Date</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((leave) => (
              <tr key={leave._id}>
                <td className="py-2 px-4 border-b">{leave.username}</td>
                <td className="py-2 px-4 border-b">{leave.leaveType}</td>
                <td className="py-2 px-4 border-b">{new Date(leave.leaveStartDate).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{new Date(leave.leaveEndDate).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">{leave.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckLeaveStatus;