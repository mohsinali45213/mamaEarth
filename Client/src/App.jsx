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
import { allSubCategory } from "./Function/SubCategory";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Contact from "./Page/Contact";
import ProductList from "./Page/ProductList";
import SingleProduct from "./Page/SingleProduct";
import Profile from "./Page/Profile";
const App = () => {
  const [catName, setCatName] = useState();
  const [subCatName,setSubCatName] =useState()
  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const result1 = await allCategory();
    const result2 = await allSubCategory()
    setCatName(result1);
    setSubCatName(result2)
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
            <Route path="/login"  element={<Login />} />
            <Route path="/register"  element={<Register />} />
            <Route path="/user"  element={<Profile />} />
            <Route path="/contact-us"  element={<Contact />} />
            <Route path="/product/:product"  element={<SingleProduct />} />
            {catName?.map((category) => (
              <Route 
                key={category.slug}
                path={`/product/:category/:categoryId`}
                element={<ProductList />}
              />
              ))}
            {
              subCatName?.map((subCategory)=>(
                <Route
                  key={subCategory.slug}
                  path={`/product/:category/:categoryId`}
                  element={<ProductList />}
                />))
            }
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


// import React from 'react'
// import Register from './Page/Register'
// import Login from './Page/Login'
// import Contact from './Page/Contact'

// const App = () => {
//   return (
//     <div>
//       {/* <Register/> */}
//       {/* <Login/> */}
//       {/* <Contact/> */}
//     </div>
//   )
// }

// export default App