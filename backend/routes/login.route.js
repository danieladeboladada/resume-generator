import express from "express";
import { createLogin, verifyLogin } from "../controllers/login.controller.js";

const router = express.Router();

router.post("/login", createLogin);

router.get("/login", verifyLogin);

export default router;