import express from "express";
import { saveResume, getAllResumesByUserId, deleteResumeById } from "../controllers/resume.controller.js";

const router = express.Router();

router.post("/save", saveResume);
router.get("/getall/:user_id", getAllResumesByUserId);
router.delete("/delete/:resume_id", deleteResumeById);

export default router;
