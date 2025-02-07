import express from 'express'
// import authMiddleware from '../middlewares/authMiddleware.js'
// import authAdmin from '../middlewares/adminAuth.js'
import{ addTask,singleTask, listTasks, updateTask, deleteTask } from '../controller/taskController.js'




const taskrouters =  express.Router()
// Create a new task
taskrouters.post("/add",addTask);

// Get all tasks for a user
taskrouters.get("/list",listTasks );

// Get a specific task by ID
taskrouters.get("/single",singleTask );

// Update a task by ID
taskrouters.put("/update",updateTask );

// Delete a task by ID
taskrouters.delete("/delete",deleteTask );


export default  taskrouters;
