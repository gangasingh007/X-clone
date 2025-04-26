import express from "express";
import { logOut, signIn, signUp } from "../Controllers/auth.controller.js";

const router = express.Router();

router.get("/signin",signIn);
router.get("/signup",signUp);
router.get("/logout",logOut);

export default router;