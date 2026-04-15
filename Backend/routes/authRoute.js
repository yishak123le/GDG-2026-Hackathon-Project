import express from "express";
import {
  login,
  signup,
  logOut,
  getMe,
  updateProfile,
  AccessRefreshToken,
 
} from "../controller/authController.js";
import { verifyToken } from "../middleware/authentication.js";

const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/register", signup);
authRoutes.post("/logout", verifyToken, logOut);
authRoutes.post("/refresh", AccessRefreshToken);
authRoutes.get("/profile", verifyToken, getMe);
authRoutes.put("/updateProfile", verifyToken, updateProfile);

export default authRoutes;
