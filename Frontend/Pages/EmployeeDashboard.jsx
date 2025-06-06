import React, { useState } from 'react';
import DashboardNavbar from '../Components/DashboardNavbar';
import ApplyLeave from '../Components/ApplyLeave';
import CheckLeaveStatus from '../Components/CheckLeaveStatus';
import { Routes, Route, NavLink } from 'react-router-dom';
import Button from "../Components/Button";

const EmployeeDashboard = () => {
  const [isLeaveDropdownOpen, setIsLeaveDropdownOpen] = useState(false);

  const toggleLeaveDropdown = () => {
    setIsLeaveDropdownOpen(!isLeaveDropdownOpen);
  };

  return (
    <>
      <div className="h-[10vh] flex items-center justify-between border px-4 sm:px-10 bg-white fixed top-0 w-full z-10">
        <DashboardNavbar first="Employee" second=" Dashboard" />
      </div>
      <div className="flex flex-1 overflow-hidden mt-[10vh]">
        {/* Fixed Sidebar */}
        <div className="w-64 h-[90vh] text-gray-500 flex flex-col justify-between p-4 shadow-2xl fixed top-[10vh] left-0">
          <div className="space-y-2">
            <div
              className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg"
              onClick={() => onSidebarClick('tasks')}
            >
              Tasks
            </div>
            <div
              className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg"
              onClick={() => onSidebarClick('attendance')}
            >
              Attendance
            </div>
            <div
              className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg"
              onClick={toggleLeaveDropdown}
            >
              Leave
            </div>
            {isLeaveDropdownOpen && (
              <div className="ml-4 space-y-2">
                <NavLink to="/employeedashboard/apply-leave">
                  <div
                    className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg"
                    onClick={() => onSidebarClick('applyLeave')}
                  >
                    Apply Leave
                  </div>
                </NavLink>
                <NavLink to="/employeedashboard/check-leave-status">
                  <div
                    className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg"
                    onClick={() => onSidebarClick('checkLeaveStatus')}
                  >
                    Check Leave Status
                  </div>
                </NavLink>
              </div>
            )}
            <div
              className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg"
              onClick={() => onSidebarClick('feedback')}
            >
              Feedback
            </div>
            <div
              className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg"
              onClick={() => onSidebarClick('salary')}
            >
              Salary
            </div>
          </div>
          <Button value={"Logout"} />
        </div>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-4 ml-64">
          <Routes>
            <Route path="/apply-leave" element={<ApplyLeave />} />
            <Route path="/check-leave-status" element={<CheckLeaveStatus />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default EmployeeDashboard;