import express  from "express";
import { createNewUser, findUserById, getAllUsers } from "../controllers/user.js";

const router= express.Router();

router.get("/all",getAllUsers);


router.post("/new",createNewUser);

router.get("/:id",findUserById);

export default router;