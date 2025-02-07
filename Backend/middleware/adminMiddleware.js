// import  jwt  from "jsonwebtoken";

// const adminAuth = (req, res, next) => {
//   const token = req.header("Authorization");
//   if (!token) return res.status(401).json({ message: "Access Denied" });
//   try {
//     const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
//     if (verified.role !== "Admin") return res.status(403).json({ message: "Unauthorized Access" });

//     req.admin = verified;
//     next();
//   }
//   catch (err) {
//     res.status(400).json({ msg: "Token is not valid" });
//   }
// }
// export default adminAuth;
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserModel from "../models/Employee.js";

dotenv.config(); // Load environment variables

export const verifyAdmin = async (req, res, next) => {
  try {
    // Get token from headers
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({ success: false, message: "Access Denied. No token provided." });
    }

    // Verify token
    const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);

    // Find the user from the database
    const user = await UserModel.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    // Check if user is an Admin
    if (user.roleBasedAccessLevel !== "Admin") {
      return res.status(403).json({ success: false, message: "Forbidden. Admin access required." });
    }

    // Attach user data to request object
    req.user = user;

    next(); // Proceed to next middleware/controller

  } catch (error) {
    console.error("Auth Error:", error);
    res.status(401).json({ success: false, message: "Invalid Token." });
  }
};
