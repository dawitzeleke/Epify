import express from "express";
import { getAllProducts, createProduct, updateProduct } from "../controller/productController.js";
const router = express.Router();

router.route("/products").get(getAllProducts).post(createProduct);

router.route("/products/:id").put(updateProduct);

export default router;
