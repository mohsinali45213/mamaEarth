import { Router } from "express";
import {registerUser,loginUser,profileImage} from "../controllers/users.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
const userRoutes = Router();

// userRoutes.post("/register", registerUser);

userRoutes.post("/register",registerUser)
userRoutes.post("/login",loginUser)
userRoutes.post("/upload/:id", upload.single('userImage'),profileImage)


export default userRoutes;
