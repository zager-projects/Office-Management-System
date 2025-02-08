import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import taskroutes from './routes/taskRoutes.js'
// import employeeRouter from './routes/employeeRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import bodyParser from "body-parser";

dotenv.config();
const app = express();

// Connect Database
connectDB();

// Body Parser Middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/task", taskroutes);
// app.use("api/employee",employeeRouter);
app.use("/api/admin", adminRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
