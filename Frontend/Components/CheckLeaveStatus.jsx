import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { primaryColor } from '../Constants/theme';

const CheckLeaveStatus = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const user = "derof13668@pixdd.com"

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/leave/employeeleave/${user}`);
        setLeaveRequests(response.data);
      } catch (error) {
        console.error('Error fetching leave requests:', error);
      }
    };

    fetchLeaveRequests();
  }, []);

  return (
    <div className="mt-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-10 rounded-lg  w-full max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-left text-gray-800">Your Leave Status</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead style={{ backgroundColor: primaryColor }}>
              <tr>
                <th className="py-2 px-4 border-b  text-left text-white font-bold">Username</th>
                <th className="py-2 px-4 border-b  text-left text-white font-bold">Leave Type</th>
                <th className="py-2 px-4 border-b  text-left text-white font-bold">Start Date</th>
                <th className="py-2 px-4 border-b  text-left text-white font-bold">End Date</th>
                <th className="py-2 px-4 border-b  text-left text-white font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((leave) => (
                <tr key={leave._id}>
                  <td className="py-2 px-4 border-b">{leave.username}</td>
                  <td className="py-2 px-4 border-b">{leave.leaveType}</td>
                  <td className="py-2 px-4 border-b">{new Date(leave.leaveStartDate).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b">{new Date(leave.leaveEndDate).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      leave.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                      leave.status === 'Approved' ? 'bg-green-200 text-green-800' :
                      'bg-red-200 text-red-800'
                    }`}>
                      {leave.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CheckLeaveStatus;