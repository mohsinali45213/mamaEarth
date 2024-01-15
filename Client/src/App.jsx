import React, { useEffect, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Head from "./Admin/Page/Head";
import Products from "./Admin/Page/Products";
import Category from "./Admin/Page/Category";
import SubCategory from "./Admin/Page/SubCategory";
import Order from "./Admin/Page/Order";
import Customer from "./Admin/Page/Customer";
import Header from "./Components/Header/Header";
import Home from "./Page/Home";
import { allCategory } from "./Function/Category";
const App = () => {
  const [catName, setCatName] = useState();

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const result = await allCategory();
    setCatName(result);
    // console.log("Result",result);
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Outlet />
              </>
            }
          >
            <Route index  element={<Home />} />
            {catName?.map((category) => (
              <Route
                key={category.slug}
                path={`/product/:category`}
                element={<Home />}
              />
            ))}
          </Route>

          {/* ---ADMIN ROUTES--- */}

          <Route path="/admin" element={<Head />}>
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/category" element={<Category />} />
            <Route path="/admin/sub-Category" element={<SubCategory />} />
            <Route path="/admin/order" element={<Order />} />
            <Route path="/admin/customer" element={<Customer />} />
          </Route>

          {/* ---ADMIN ROUTES--- */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
