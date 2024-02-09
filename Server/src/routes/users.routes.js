import { Router } from "express";
import {registerUser,loginUser,profileImage, getUser} from "../controllers/users.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
const userRoutes = Router();

// userRoutes.post("/register", registerUser);

userRoutes.post("/register",registerUser)
userRoutes.post("/login",loginUser)
userRoutes.post("/upload/:id", upload.single('userImage'),profileImage)
userRoutes.get("/",getUser)

export default userRoutes;
