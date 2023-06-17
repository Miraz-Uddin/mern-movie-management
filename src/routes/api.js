import express from "express";
import { home } from "../controllers/HomeController.js";
import {
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  modifyProduct,
  storeProduct,
} from "../controllers/ProductController.js";
import {
  getProfileData,
  login,
  otpVerify,
  register,
  sendVerificationOTP,
} from "../controllers/UserController.js";
import AuthVerifyMiddleware from "../middleware/AuthVerifyMiddleware.js";

const router = express.Router();

// No Auth Required
router.get("/", home);
router.get("/products", getAllProducts);
router.post("/products", storeProduct);
router.get("/products/:id", getSingleProduct);
router.put("/products/:id", modifyProduct);
router.delete("/products/:id", deleteProduct);
router.post("/login", login);
router.post("/registration", register);
router.get("/send-otp/:email", sendVerificationOTP);
router.get("/verify-otp/:email/:otp", otpVerify);

// Auth Required
router.get("/profile", AuthVerifyMiddleware, getProfileData);

export default router;
