import {ratingProduct, getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../controller/product.controller.js";
import express from "express"
const router = express.Router();

// RATINGS PRODUCT ROUTE
router.post("/rating/:productId", ratingProduct)
// GET ALL PRODUCT
router.get("/", getAllProducts);
// GET ONE PRODUCT
router.get("/find/:id", getProduct);
// CREATE PRODUCT
router.post("/", createProduct)
// UPDATE PRODUCT
router.put("/:id", updateProduct);
// DETETE PRODUCT
router.delete("/:id", deleteProduct)

export default router