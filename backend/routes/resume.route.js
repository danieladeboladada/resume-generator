import express from "express";
import { saveResume, getAllActiveResumesByUserId, getAllDeletedResumesByUserId, deleteResumeById, tempDeleteResumeById, restoreResumeById } from "../controllers/resume.controller.js";

const router = express.Router();

router.post("/save", saveResume);
router.get("/getallactive/:user_id", getAllActiveResumesByUserId);
router.get("/getalldeleted/:user_id", getAllDeletedResumesByUserId);
router.delete("/delete/:resume_id", deleteResumeById);
router.patch("/tempdelete/:resume_id", tempDeleteResumeById);
router.patch("/restore/:resume_id", restoreResumeById);

export default router;
