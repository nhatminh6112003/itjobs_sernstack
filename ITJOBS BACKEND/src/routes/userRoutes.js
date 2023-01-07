import express from "express";
import AuthMiddleWear from "@src/middleware/authMiddlewear";
import userController from "@src/controller/userController";

const router = express.Router();
router.get(
  "/dashboard",
  AuthMiddleWear.protect,
  userController.dashboard
);
router.get("/home", userController.home);
router.get("/viewpdf", userController.viewPdf);
router.get("/dataUser",AuthMiddleWear.protect,userController.dataUser);

router.patch("/profile", userController.updateUser);

router.get("/downloadCvProfile", userController.downloadCvProfile);

router.post("/refresh-token",userController.refreshToken);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);

export default router;
