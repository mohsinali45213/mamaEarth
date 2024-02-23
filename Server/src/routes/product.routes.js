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
  listRelated,
  catProducts,
  subCatProducts
} from "../controllers/product.controller.js";
import { payment } from "../controllers/Order.controller.js";
const productRoutes = Router();

productRoutes.post("/product", upload.single('images'), createProduct);
productRoutes.get("/products/total", productsCount);
productRoutes.get("/products", allProduct );
// productRoutes.get("/products/:count", allProduct );
productRoutes.delete("/product/:slug", removeProduct);
productRoutes.get("/product/:slug", readProduct);
productRoutes.put("/product/:slug", upload.single('images'),updateProduct);
productRoutes.post("/products", list);
productRoutes.get("/products/related/:productId", listRelated);
productRoutes.post("/search/filter", searchFilters);
productRoutes.get("/catPro/:id",catProducts)
productRoutes.get("/subCatPro/:id",subCatProducts)
productRoutes.post('/payment-intent',payment)
export default productRoutes