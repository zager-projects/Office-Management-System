import express from "express";
import cors from "cors";
import 'dotenv/config'
import connectDB from "./config/db.js";
import taskroutes from './routes/taskRoutes.js'
import employeeRouter from './routes/employeeRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import reportRoutes from "./routes/reportRoutes.js";



const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/task", taskroutes);
app.use("/api/employee",employeeRouter);
app.use("/api/admin", adminRoutes);
app.use("/api/reports", reportRoutes);

// Start Server
const port = process.env.PORT || 5000;
app.listen(port , ()=> console.log('serverr started on port',port));
