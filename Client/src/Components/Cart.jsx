import React, { useEffect, useState } from "react";
import "../Style/Cart.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlicer";

const Cart = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  // console.log(cartItems)
  const handleAddToCart = () => {
    dispatch(addToCart({ product }));
  };


  const sliceAbout = (about) => {
    if (about?.length > 50) {
      return about?.slice(0, 50) + " ...";
    }
    return about?.trim();
  };

  const sliceInfo = (info) => {
    if (info?.length > 32) {
      return info?.slice(0, 32) + " ...";
    }
    return info?.trim();
  };

  return (
    <div className="product-cart">
      <Link id="pro-link" to={`/product/${product?.slug}`}>
        <img id="product-img" src={product?.images} alt="" loading="lazy" />
        <h3>{sliceAbout(product?.about)}</h3>
        <h4>{sliceInfo(product?.info)}</h4>
        {/* <h5>Review</h5> */}
        <p id="price">₹{product?.price}</p>
      </Link>
      <button onClick={handleAddToCart}>ADD TO CART</button>
    </div>
  );
};

export default Cart;
