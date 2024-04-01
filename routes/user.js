import express  from "express";

import { createNewUser, deleteUserById, findUserById, getAllUsers, updateUserById } from "../controllers/user.js";

const router= express.Router();

router.get("/all",getAllUsers);


router.post("/new",createNewUser);

router.get("/:id",findUserById);
router.put("/:id",updateUserById);
router.delete("/:id",deleteUserById);
// router.route("/user/:id").get(findUserById).put(updateUserById).delete(deleteUserById)
//same as above three lines

export default router;