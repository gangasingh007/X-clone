import express from "express";
import { logOut, signIn, signUp } from "../Controllers/auth.controller.js";
import { userMiddleWare } from "../MiddleWares/user.middleware.js";

const router = express.Router();

router.post("/signin",signIn);
router.post("/signup",userMiddleWare,signUp);
router.post("/logout",logOut);

export default router;