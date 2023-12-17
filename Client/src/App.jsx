import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Page/Home";
import Header from "./Components/Header/Header.jsx";
import AddCart from "./Page/AddCart.jsx";
// import AddCart from './Page/AddCart.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<AddCart />} />
      </Routes>
    </div>
  );
};

export default App;
