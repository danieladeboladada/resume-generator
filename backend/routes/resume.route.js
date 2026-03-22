import express from "express";
import { saveResume, getAllActiveResumesByUserId, getAllDeletedResumesByUserId, deleteResumeById, tempDeleteResumeById, restoreResumeById } from "../controllers/resume.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/save", authMiddleware, saveResume);
router.get("/getallactive/:user_id", authMiddleware, getAllActiveResumesByUserId);
router.get("/getalldeleted/:user_id", authMiddleware, getAllDeletedResumesByUserId);
router.delete("/delete/:resume_id", authMiddleware, deleteResumeById);
router.patch("/tempdelete/:resume_id", authMiddleware, tempDeleteResumeById);
router.patch("/restore/:resume_id", authMiddleware, restoreResumeById);

export default router;
