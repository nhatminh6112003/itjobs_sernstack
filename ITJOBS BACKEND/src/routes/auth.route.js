import express from "express";
import AuthMiddleWear from "@src/middleware/authMiddlewear";
import authController from "@src/controllers/auth.controller";
const router = express.Router();


router.post("/refresh-token",authController.refreshToken);
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

export default router;
