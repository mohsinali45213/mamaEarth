import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./Header.css";
import AddCart from "../../Page/AddCart";

const Header = () => {
  const location = useLocation();

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  useEffect(() => {
    const clickHandler = (event) => {

      if (
        !event.target.closest("#openNav") &&
        !event.target.closest(".navbar")
      ) {
        setIsOpen1(false);
      }
      if (
        !event.target.closest("#btnAccount") &&
        !event.target.closest(".account-detail")
      ) {
        setIsOpen2(false);
      }
      if (
        !event.target.closest("#btnCart") &&
        !event.target.closest(".container")
      ) {
        setIsOpen3(false);
      }
    };
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  useEffect(() => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
  }, [location.pathname]);

  return (
    <div className="header">
      <div className="header-top">
        <img
          onClick={() => setIsOpen1(!isOpen1)}
          id="openNav"
          src="src/assets/Images/menu-burger.png"
          alt=""
        />
        <img id="logo" src="src/assets/Images/mamaearth_logo.png" alt="logo" />
        <div className="search">
          <input type="search-input" />
          <button>
            <img id="search" src="src/assets/Images/search.png" alt="search" />
          </button>
        </div>

        <div className="icons">
          <span id="btnCart" onClick={() => setIsOpen3(!isOpen3)}>
            <i id="icon" className="fa-solid fa-cart-shopping"></i>
            <p>Cart</p>
          </span>
          <span id="btnAccount" onClick={() => setIsOpen2(!isOpen2)}>
            <i id="icon" className="fa-regular fa-user"></i>
            <p>Account</p>
          </span>
        </div>
      </div>
      <div className="navbar">
        <ul id="navbar-ul" className={isOpen1 ? "open" : ""}>
          <div className="nav-info " style={{ width: "100%" }}>
            <img id="avatar" src="src/assets/Images/1.jpg" alt="" />
            <div className="user-name">
              <h4>Harry Potter</h4>
              <h5>9834342134</h5>
            </div>
          </div>

          <li>
            <Link id="navItem" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link id="navItem" to="/">
              Hair
            </Link>
          </li>
          <li>
            <Link id="navItem" to="/">
              Face
            </Link>
          </li>
          <li>
            <Link id="navItem" to="/">
              Body
            </Link>
          </li>
          <li>
            <Link id="navItem" to="/">
              MakeUp
            </Link>
          </li>
          <li>
            <Link id="navItem" to="/">
              Ingredient
            </Link>
          </li>
          <li>
            <Link id="navItem" to="/">
              Baby
            </Link>
          </li>
          <li>
            <Link id="navItem" to="/">
              All Products
            </Link>
          </li>
        </ul>
      </div>

      <div className={`account-detail ${isOpen2 ? "open" : ""}`}>
        <div className="user-info">
          <img id="avatar" src="src/assets/Images/1.jpg" alt="" />
          <div className="user-name">
            <h4>Harry Potter</h4>
            <h5>9834342134</h5>
          </div>
        </div>
        <div className="order-detail">
          <ul>
            <li>
              <i className="fa-regular fa-user"></i>
              <span>Your Profile</span>
            </li>
            <li>
              <i className="fa-solid fa-store"></i>
              <span>Your Order</span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>Contact Us</span>
            </li>
            <li>
              <i className="fa-solid fa-right-to-bracket"></i>
              <span>Login</span>
            </li>
            <li>
              <i className="fa-solid fa-right-from-bracket"></i>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
      <AddCart slide={isOpen3} setSlide={setIsOpen3} />
    </div>
  );
};

export default Header;
