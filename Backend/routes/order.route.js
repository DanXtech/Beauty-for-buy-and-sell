import express from "express"
import protect from "../Middleware/auth.middleware.js"
import {getAllOrders,  getUserOrder, deleteOrder, createOrder, updateOrder} from "../controller/order.controller.js"
const router = express.Router();


//CREATE ORDERS ROUTE 
router.post("/", createOrder);
//UPDATE ORDERS POST ROUTE
router.put("/:id", updateOrder)
// GET ALL ORDERS ROUTE
router.get("/", protect, getAllOrders)
// DELETE ORDER ROUTE
router.delete("/:id", deleteOrder)
// GET USER'S ORDERS ROUTE
router.get("/find/:userId", getUserOrder)

export default router
