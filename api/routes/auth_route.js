import express from "express";
import { signUp } from "../controllers/auth_controller.js";
const router =express.Router();
router.post('/signup', signUp);
export default router;