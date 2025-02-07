import  jwt  from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access Denied" });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (verified.role !== "Admin") return res.status(403).json({ message: "Unauthorized Access" });

    req.admin = verified;
    next();
  }
  catch (err) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}
export default adminAuth;