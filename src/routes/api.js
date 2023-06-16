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
  register,
} from "../controllers/UserController.js";
import AuthVerifyMiddleware from "../middleware/AuthVerifyMiddleware.js";

const router = express.Router();
router.get("/", home);
router.get("/products", getAllProducts);
router.post("/products", storeProduct);
router.get("/products/:id", getSingleProduct);
router.put("/products/:id", modifyProduct);
router.delete("/products/:id", deleteProduct);
router.get("/profile", AuthVerifyMiddleware, getProfileData);

// auth
router.post("/login", login);
router.post("/registration", register);

export default router;
