import React, { useEffect, useState } from "react";
import { primaryColor,secondaryColor } from "../Constants/theme";
import { NavLink } from "react-router-dom";
import Button from "../Components/Button";

function AdminTaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/task/list"); // Update with your backend URL
        // console.log(response.json());
        const data = await response.json();
        if (data) {
          setTasks(data.tasks);
        } else {
          console.error("Failed to fetch tasks");
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    // console.log("run")
    // console.log(tasks);

    fetchTasks();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-3xl font-bold ">Task List</h2>
        <NavLink to="/admin/createtask">
            <Button value="Create a Task"/>
        </NavLink>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse bg-white shadow-md rounded-md overflow-hidden">
          <thead
          style={{backgroundColor:primaryColor}} className=" text-white">
            <tr>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Priority</th>
              <th className="py-3 px-4 text-left">Due Date</th>
              <th className="py-3 px-4 text-left">Assigned To</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <tr key={task._id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-4">{task.title}</td>
                  <td className="py-3 px-4">{task.description}</td>
                  <td className="py-3 px-4 font-semibold text-blue-600">{task.status}</td>
                  <td className="py-3 px-4">{task.category}</td>
                  <td className="py-3 px-4 text-red-500 font-medium">{task.priority}</td>
                  <td className="py-3 px-4">{new Date(task.dueDate).toLocaleDateString()}</td>
                  <td className="py-3 px-4">{task.username}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-4 text-center text-gray-500">
                  No tasks found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminTaskList;
