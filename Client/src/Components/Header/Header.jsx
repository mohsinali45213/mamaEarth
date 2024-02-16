import React, { useEffect, useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import "./Header.css";
import AddCart from "../../Page/AddCart";
import { allCategory } from "../../Function/Category.js";
import { searchProduct } from "../../Function/Product.js";
import { getSubs } from "../../Function/Category.js";
import { singleUser } from "../../Function/User.js";
import { useSelector } from "react-redux";
const Header = () => {
  const location = useLocation();
  const [totalCartItem, setTotalCartItem] = useState(0);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [subCat, setSubCat] = useState();
  const [categories, setCategories] = useState([]);
  const [userId, setUserId] = useState();
  const [user, setUser] = useState();

  const cartItems= useSelector(state => state.cartItems);

  const fetchCategories = async () => {
    try {
      const categoriesData = await allCategory();
      setCategories(categoriesData);
    } catch (error) {
      console.log("getCategory Failed");
    }
  };

  const getUserData = async () => {
    const result = await singleUser(userId);
    setUser(result);
  };

  const search = async (e) => {
    const query = e.target.value;
    const result = await searchProduct(query);
    localStorage.setItem("searchData",JSON.stringify(result));
    // console.log(result);
  };

  const getSubCat = async (id) => {
    const result = await getSubs(id);
    setSubCat(result);
  };

  useEffect(() => {
    setUserId(JSON.parse(localStorage.getItem("user")));
    getUserData(userId);
  }, [userId,isOpen2]);

  useEffect(() => {
    fetchCategories();
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

  useEffect(()=>{
    setTotalCartItem(JSON.parse(localStorage.getItem("cart"))?.length || 0);
  },[localStorage.getItem("cart")])
  
  return (
    <div className="header">
      <div className="header-top">
        <img
          onClick={() => setIsOpen1(!isOpen1)}
          id="openNav"
          src="/src/assets/Images/menu-burger.png"
          alt=""
        />
        <img id="logo" src="http://res.cloudinary.com/mohsin45213/image/upload/v1707748702/behxns8zai3pb8ro8hyi.png" alt="logo" />
        <div className="search">
          <input type="search-input" onChange={search} />
          <button>
            <i id="search" className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className="icons">
          <span id="btnCart" onClick={() => setIsOpen3(!isOpen3)}>
            <i id="icon" className="fa-solid fa-cart-shopping"></i>
            <p>Cart</p>
            <span id="count-cart">{cartItems.length}</span>
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
            <Link to="/" id="navItem">
              Home
            </Link>
          </li>

          {categories?.map((category) => (
            <li
              id="cat"
              key={category._id}
              onMouseOver={() => getSubCat(category._id)}
            >
              <div className="dropdown">
                <Link
                  id="navItem"
                  to={`/product/${category.slug}/${category._id}`}
                >
                  {category.name}
                </Link>
                <ul id="dropdown-item">
                  {subCat?.map((item) => (
                    <div key={item._id}>
                      <Link
                        id="AccLink"
                        to={`/product/${item.slug}/${item._id}`}
                      >
                        {" "}
                        <li>{item.name}</li>
                      </Link>
                    </div>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={`account-detail ${isOpen2 ? "open" : ""}`}>
        <div className="user-info">
          <img id="avatar" src={user?.userImage} alt="" />
          <div className="user-name">
            <h4>{user?.username}</h4>
            <h5>{user?.phone}</h5>
          </div>
        </div>
        <div className="order-detail">
          <ul>
          <Link id="AccLink" to="/user">
            <li>
              <i className="fa-regular fa-user"></i>
              <span>Your Profile</span>
            </li>
          </Link>
            <li>
              <i className="fa-solid fa-store"></i>
              <span>Your Order</span>
            </li>
            <Link id="AccLink" to="/contact-us">
              <li>
                <i className="fa-solid fa-phone"></i>
                <span>Contact Us</span>
              </li>
            </Link>
            <Link id="AccLink" to="/login">
              <li>
                <i className="fa-solid fa-right-to-bracket"></i>
                <span>Login</span>
              </li>
            </Link>
            <Link id="AccLink" to="/register">
              <li>
                <i className="fa-solid fa-right-to-bracket"></i>
                <span>Register</span>
              </li>
            </Link>
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
