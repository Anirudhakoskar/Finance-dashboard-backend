import express from "express";
import { createRecord, getRecords } from "../controllers/record.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/role.middleware.js";
import { updateRecord, deleteRecord } from "../controllers/record.controller.js";
//router >>>
const router = express.Router();

router.post("/", protect, allowRoles("admin"), createRecord);
router.get("/", protect, allowRoles("admin", "analyst"), getRecords);
router.put("/:id", protect, allowRoles("admin"), updateRecord);
router.delete("/:id", protect, allowRoles("admin"), deleteRecord);


export default router;
