import jwt from "jsonwebtoken";
//
export const protect = (req, res, next) => {
  try {
    const token = req.headers.authorization;

if (!token || !token.startsWith("Bearer ")) {
  return res.status(401).json({ message: "Invalid token format" });
}

const cleanToken = token.split(" ")[1];

    const decoded = jwt.verify(cleanToken, process.env.JWT_SECRET);

    req.user = decoded; // contains id & role

    next();

  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
