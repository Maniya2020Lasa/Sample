import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getSingleProductController,
  productPhotoController,
  updateProductController,
} from "../controllers/ProductController.js";
const router = express.Router();

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
//get products
router.get("/get-product", getAllProductsController);

//get single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);
//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

export default router;
