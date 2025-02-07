import React from "react";
import Button from "./Button";

const Sidebar = () => {
    return (
      <div className="w-64 h-[90vh] text-gray-500 flex flex-col justify-between p-4 shadow-2xl">
        <div className="space-y-2">
          <div className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg">Tasks</div>
          <div className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg">Attendance</div>
          <div className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg">Leave</div>
          <div className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg">Feedback</div>
          <div className="p-3 text-lg py-2 px-4 cursor-pointer hover:bg-purple-300 hover:text-purple-600 rounded-lg">Salary</div>
        </div>
        <Button value={"Logout"}/>
      </div>
    );
  };
  
  export default Sidebar;
