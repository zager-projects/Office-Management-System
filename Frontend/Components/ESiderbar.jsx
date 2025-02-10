
import React, { useState } from "react"
import Button from "./Button"
import { NavLink } from "react-router-dom"

const Sidebar = ({ onSidebarClick }) => {
  const [isLeaveDropdownOpen, setIsLeaveDropdownOpen] = useState(false)

  const toggleLeaveDropdown = () => {
    setIsLeaveDropdownOpen(!isLeaveDropdownOpen)
  }

  return (
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
            <NavLink to="apply-leave">
            <div
              className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg"
              onClick={() => onSidebarClick('applyLeave')}
            >
              Apply Leave
            </div>
            </NavLink>
            <div
              className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg"
              onClick={() => onSidebarClick('checkLeaveStatus')}
            >
              Check Leave Status
            </div>
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
  )
}

export default Sidebar