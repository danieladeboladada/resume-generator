import express from "express";
import { saveResume, getAllResumesByUserId } from "../controllers/resume.controller.js";

const router = express.Router();

router.post("/save", saveResume);

router.get("/getall/:user_id", getAllResumesByUserId);

export default router;
