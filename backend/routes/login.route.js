import express from "express";
import { createLogin, verifyLogin } from "../controllers/login.controller.js";

const router = express.Router();

router.post("/createlogin", createLogin);

router.post("/verifylogin", verifyLogin);

export default router;