import { Router } from "express";
import {registerUser,loginUser,profileImage, getUser, updateUser, getSingleUser, logoutUser} from "../controllers/users.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
const userRoutes = Router();

// userRoutes.post("/register", registerUser);

userRoutes.post("/register",registerUser)
userRoutes.post("/login",loginUser)
userRoutes.get("/logout/:id",logoutUser)
userRoutes.post("/upload/:id", upload.single('userImage'),profileImage)
userRoutes.get("/",getUser)
userRoutes.post("/:id",updateUser)
userRoutes.get("/:id",getSingleUser)



export default userRoutes;
