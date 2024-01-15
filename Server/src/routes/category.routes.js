import { Router } from "express";
import { createCategory,updateCategory,readCategory,removeCategory,listCategory ,getSubs} from "../controllers/category.controllers.js";
const categoryRoutes = Router()

categoryRoutes.post("/category",createCategory);
categoryRoutes.get("/categories",listCategory);
categoryRoutes.get("/category/:slug",readCategory);
categoryRoutes.put("/category/:slug",updateCategory);
categoryRoutes.delete("/category/:slug",removeCategory);
categoryRoutes.get("/categories/subs/:id",getSubs);
export default categoryRoutes;