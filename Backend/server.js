import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import taskroutes from './routes/taskRoutes.js';
// import employeeRouter from './routes/employeeRoutes.js'
import adminRoutes from './routes/adminRoutes.js';
import salaryRoutes from "./routes/salaryRoutes.js";
import leaveRoutes from './routes/leaveRoutes.js';
import attendanceRoutes from './routes/attendanceRoutes.js';

dotenv.config();
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/task", taskroutes);
// app.use("api/employee",employeeRouter);
app.use("/api/salary", salaryRoutes);
app.use("/api/admin", adminRoutes);
app.use('/api/leave', leaveRoutes);
app.use('/api/attendance', attendanceRoutes);


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
