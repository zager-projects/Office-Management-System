import React from 'react'
import { primaryColor, secondaryColor } from '../Constants/theme'

const ApplyLeave = () => {
  return (
    <div className="mt-20 from-blue-400 to-purple-500 flex items-center justify-center px-4 ">
      <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg w-[50%]">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800">Apply for Leave</h2>
        <form>
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="leaveType">
              Leave Type
            </label>
            <select
              id="leaveType"
              className="shadow appearance-none border rounded w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select leave type</option>
              <option value="sick">Sick Leave</option>
              <option value="casual">Casual Leave</option>
              <option value="annual">Annual Leave</option>
            </select>
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              className="shadow appearance-none border rounded w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              className="shadow appearance-none border rounded w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 sm:mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reasons">
              Reasons
            </label>
            <textarea
              id="reasons"
              className="shadow appearance-none border rounded w-full py-2 sm:py-3 px-3 sm:px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter the reasons for leave"
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
  )
}

export default ApplyLeave