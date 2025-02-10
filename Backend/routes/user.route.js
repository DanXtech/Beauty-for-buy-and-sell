import express from "express"
import {getAllUsers, getUser, deleteUser, updateUser} from "../controller/user.controller.js"
const router = express.Router();


//GET ALL USERS ROUTE
router.get("/", getAllUsers);

// DELETE USER ROUTE
router.delete(":/id", deleteUser);

// UPDATE USER ROUTE
router.put("/:id", updateUser);

// GET ONE USER ROUTE
router.get("/find/:userId", getUser);
export default router