import express from "express";
import { getAllProducts, createProduct, updateProduct, deleteProduct, getSingleProduct} from "../controller/productController.js";
const router = express.Router();

router.route("/products").get(getAllProducts).post(createProduct);

router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getSingleProduct);

export default router;
