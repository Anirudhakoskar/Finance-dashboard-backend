import express from "express";
import { register, login } from "../controllers/auth.controller.js";
//router >>>
const router = express.Router();

import { protect } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/role.middleware.js";

// Test route
router.get("/admin-only", protect, allowRoles("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

router.post("/register", register);
router.post("/login", login);

export default router;
