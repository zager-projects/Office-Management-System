import React, { useEffect, useState } from 'react'
import { primaryColor } from '../Constants/theme';


function AllLeaveRequests() {
    const [leaveRequests, setLeaveRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetchLeaveRequests();
    }, []);

    const fetchLeaveRequests = async () => {
      console.log("run")
        try {
          const response = await fetch('http://localhost:3000/api/leave/leavedashboardadmin');
          if (!response.ok) {
            throw new Error('Failed to fetch leave requests');
          }
          const data = await response.json();
        //   console.log(data);
          setLeaveRequests(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      };
  return (
    <>
    <div className="w-full p-4">
      <div className="text-xl font-bold mb-4">Leave Requests</div>
      {/* Kept overflow-x-auto only on container for responsive design */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead style={{backgroundColor:primaryColor}} className="">
            <tr className=' '>
              <th className="px-6 py-3 text-left font-semibold  text-white ">Employee</th>
              <th className="px-6 py-3 text-left font-semibold  text-white">Email</th>
              <th className="px-6 py-3 text-left font-semibold  text-white">Leave Type</th>
              <th className="px-6 py-3 text-left font-semibold  text-white">Start Date</th>
              <th className="px-6 py-3 text-left font-semibold  text-white">End Date</th>
              {/* CHANGE 1: Added w-1/4 to give reason column more width */}
              <th className="px-6 py-3 text-left font-semibold  text-white w-1/4">Reason</th>
              <th className="px-6 py-3 text-left font-semibold  text-white">Status</th>
              <th className="px-6 py-3 text-left font-semibold  text-white">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leaveRequests.map((leave) => (
              <tr key={leave._id} className="hover:bg-gray-50">
                {/* CHANGE 2: Removed whitespace-nowrap from all cells */}
                <td className="px-6 py-4">{leave.username}</td>
                <td className="px-6 py-4">{leave.emailId}</td>
                <td className="px-6 py-4">{leave.leaveType}</td>
                <td className="px-6 py-4">{formatDate(leave.leaveStartDate)}</td>
                <td className="px-6 py-4">{formatDate(leave.leaveEndDate)}</td>
                {/* CHANGE 3: Added break-words to handle long text in reason */}
                <td className="px-6 py-4 break-words">{leave.reason}</td>
                <td className="px-6 py-4">
                  {/* CHANGE 4: Added dynamic status colors */}
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    leave.status === 'Approved' ? 'bg-green-500 text-white' :
                    leave.status === 'Rejected' ? 'bg-red-500 text-white' :
                    'bg-yellow-500 text-white'
                  }`}>
                    {leave.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {leave.status === 'Pending' && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApprove(leave._id)}
                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(leave._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default AllLeaveRequests