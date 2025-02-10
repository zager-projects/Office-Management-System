// middleware/authMiddleware.js
export const protect = (req, res, next) => {
    // Example: Authentication logic
    if (req.headers.authorization) {
        req.user = { id: "12345", isAdmin: false }; // Simulate a user object
        next();
    } else {
        res.status(401).json({ message: "Not authorized, no token" });
    }
};

export const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403).json({ message: "Not authorized as an admin" });
    }
};
