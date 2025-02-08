import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import DashboardNavbar from '../Components/DashboardNavbar';
import EmployeeAddForm from './EmployeeAddFrom';
// import EmployeeAddForm from '../Pages/EmployeeAddForm';
import Sidebar from '../Components/Sidebar';


const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Navbar */}
      <div className="h-[10vh] flex items-center justify-between border px-10 bg-white">
        <DashboardNavbar first="A" second="dmin Dashboard" />
        <div className="relative inline-block text-left">
          <button
            onClick={toggleDropdown}
            className="inline-flex justify-center items-center px-4 py-2 text-semibold font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Manage Employees
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <NavLink to="/admin/register-employee">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Add Employee
                  </button>
                </NavLink>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Update Employee
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Delete Employee
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Fixed Sidebar */}
        {/* <aside className="w-60 h-[90vh] bg-red-200 flex-shrink-0"> */}
          {/* Sidebar content */}
        {/* </aside> */}
        <Sidebar/>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route path="/register-employee" element={<EmployeeAddForm />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;