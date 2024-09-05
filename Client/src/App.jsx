import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import Footer from "./Page/Footer";
import PrivacyPolicy from "./Page/Privacy";
import TermCondition from "./Page/TermCondition";
import TermConditionCashBack from "./Page/TermConditionCashBack";
import AboutUs from "./Page/AboutUs";
import Orders from "./Page/Orders";
import PageNotFund from "./Page/PageNotFund";
import Success from "./Page/Success";
import Failed from "./Page/Failed";
import { singleUser } from "./Function/User";
import Search from "./Page/Search";
import YourOrder from "./Page/YourOrder";
const App = () => {
  const [catName, setCatName] = useState();
  const [subCatName, setSubCatName] = useState();

  useEffect(() => {
    getCategory();
  },[]);

  const getCategory = async () => {
    const result1 = await allCategory();
    const result2 = await allSubCategory();
    setCatName(result1);
    setSubCatName(result2);
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
                <Footer />
              </>
            }
          >
            <Route index element={<Home />} />

            <Route path="/user" element={<ProtectedPage Cmp={Profile} />} />
            <Route path="/checkout" element={<ProtectedPage Cmp={Orders} />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/your-order" element={<YourOrder />} />

            <Route path="/contact-us" element={<Contact />} />
            <Route path="/product/:product" element={<SingleProduct />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermCondition />} />
            <Route
              path="/terms-and-conditions-cashback"
              element={<TermConditionCashBack />}
            />
            <Route path="/about-us" element={<AboutUs />} />

            {catName?.map((category) => (
              <Route
                key={category.slug}
                path={`/product/:category/:categoryId`}
                element={<ProductList />}
              />
            ))}
            {subCatName?.map((subCategory) => (
              <Route
                key={subCategory.slug}
                path={`/product/:category/:categoryId`}
                element={<ProductList />}
              />
            ))}
          </Route>

          {/* ---ADMIN ROUTES--- */}

          <Route path="/" element={<Head />}>
            <Route
              path="/admin/products"
              element={<ProtectedAdmin Cmp={Products} />}
            />
            <Route
              path="/admin/category"
              element={<ProtectedAdmin Cmp={Category} />}
            />
            <Route
              path="/admin/sub-Category"
              element={<ProtectedAdmin Cmp={SubCategory} />}
            />
            <Route
              path="/admin/order"
              element={<ProtectedAdmin Cmp={Order} />}
            />
            <Route
              path="/admin/customer"
              element={<ProtectedAdmin Cmp={Customer} />}
            />
          </Route>
          <Route path="/search" element={<Search />} />

          <Route path="*" element={<PageNotFund />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failed" element={<Failed />} />
          {/* ---ADMIN ROUTES--- */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

const ProtectedPage = ({ Cmp }) => {
  const navigator = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigator("/login");
    }
  });
  return (
    <div>
      <Cmp />
    </div>
  );
};

const ProtectedAdmin = ({ Cmp }) => {
  const navigator = useNavigate();
  const [user, setUser] = useState();
  const location = useLocation()

  const getUserData = async () => {
    const id = JSON.parse(localStorage.getItem("user"));
    const result = await singleUser(id);
    setUser(result);
    if (user) {
      if (!user) {
        navigator("/login");
      }
      if (user.role !== "Admin") {
        navigator("/");
      }
    }
  };

  useEffect(() => {
    getUserData();
  }, [location.pathname]);

  return <Cmp />;
};
