import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  createProduct,
  updateProduct,
  removeProduct,
  list,
  searchFilters,
  allProduct,
  readProduct,
  productsCount,
  listRelated
} from "../controllers/product.controller.js";
const productRoutes = Router();

productRoutes.post("/product", upload.single('userImage'), createProduct);
productRoutes.get("/products/total", productsCount);
productRoutes.get("/products", allProduct );
// productRoutes.get("/products/:count", allProduct );
productRoutes.delete("/product/:slug", removeProduct);
productRoutes.get("/product/:slug", readProduct);
productRoutes.put("/product/:slug", upload.single('userImage'),updateProduct);
productRoutes.post("/products", list);
productRoutes.get("/products/related/:productId", listRelated);
productRoutes.post("/search/filters", searchFilters);

export default productRoutes