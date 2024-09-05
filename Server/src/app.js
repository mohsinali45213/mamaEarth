import express from "express";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/users.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import subCategoryRoutes from "./routes/subcategory.routes.js";
import productRoutes from "./routes/product.routes.js";
import session from 'express-session';
const app = express();
//.env configuration
dotenv.config({
  path: "../.env",
});

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Database Connection call
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(` Server is Running at Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed", err);
  });

//Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1", categoryRoutes);
app.use("/api/v1", subCategoryRoutes);
app.use("/api/v1", productRoutes);
