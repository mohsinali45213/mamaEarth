import { Router } from "express";
import {
  createSubCategory,
  listSubCategory,
  readSubCategory,
  removeSubCategory,
  updateSubCategory,
} from "../controllers/subCategory.controller.js";
const subCategoryRoutes = Router();

subCategoryRoutes.post("/sub",createSubCategory);
subCategoryRoutes.get("/subs", listSubCategory);
subCategoryRoutes.get("/sub/:slug", readSubCategory);
subCategoryRoutes.put("/sub/:slug", updateSubCategory);
subCategoryRoutes.delete("/sub/:slug", removeSubCategory);

export default subCategoryRoutes
