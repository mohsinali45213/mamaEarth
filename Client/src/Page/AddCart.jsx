import React, { useEffect, useState } from "react";
import "../Style/AddCart.css";
import { useDispatch, useSelector } from "react-redux";
import { decrementCartItem, incrementCartItem } from "../redux/CartSlicer";
const AddCart = ({ slide, setSlide }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  // console.log(cartItems)
  const increment = (product) => {
    dispatch(incrementCartItem({ product }));
  };
  const decrement = (product) => {
    dispatch(decrementCartItem({ product }));
  };

  return (
    <div className={`container ${slide ? "open" : ""}`}>
      <div className="head-container">
        <i
          onClick={() => setSlide(false)}
          className="fa-solid fa-arrow-left"
        ></i>
        <h3>My Cart</h3>
      </div>
      <h4 id="h4">Order Summary</h4>
      <div className="cart-wrapper">
        {cartItems?.map((item) => (
          <div key={item._id} className="cart-container">
            <img src={item?.images} alt="" />
            <div className="info-container">
              <h5>{item?.about}</h5>
              <div className="price-container">
                <span>₹{item?.price}</span>
                <div className="count-container">
                  <button id="minus" onClick={() => decrement(item)}>
                    -
                  </button>
                  <h4>{item?.qty}</h4>
                  <button onClick={() => increment(item)}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddCart;
