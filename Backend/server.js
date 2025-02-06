const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to database
connectDB();

// Import routes correctly
const salaryRoutes = require('./routes/salaryRoutes');  // ✅ Fix this import
const leaveRoutes = require('./routes/leaveRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');

// Use routes
app.use("/api/salary", salaryRoutes);  // ✅ Fix this line
app.use("/api/leave", leaveRoutes);
app.use("/api/attendance", attendanceRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
