import express from "express";
import { signUp, logIn } from "../Controllers/user.controller.js";
import authenticateToken from "../Middlewares/auth.js";

const router = express.Router();

router.post("/signup", authenticateToken, signUp);
router.post("/login", authenticateToken, logIn);

export default router;