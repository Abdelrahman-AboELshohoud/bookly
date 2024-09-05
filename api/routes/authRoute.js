import express from "express";
import {
  loginAccount,
  registerAccount,
  signout,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerAccount);
router.post("/login", loginAccount);
router.get("/signout", signout);

export default router;
