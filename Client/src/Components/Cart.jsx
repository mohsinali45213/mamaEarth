import React, { useState } from "react";
import "../Style/Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ img, about, info, price,slug }) => {

  // console.log(img,about,info,price);
  // console.log(slug);
  const addToCart = ()=>{
    const newItem = {img,about,info,price}
    const allItemInCart = JSON.parse(localStorage.getItem("cartItem")) || []
    localStorage.setItem("cartItem",JSON.stringify([...allItemInCart,newItem]))
  }

  return (
    <div className="product-cart">
     <Link to={`/product/${slug}`}>
      {/* <img src={`${img}`} alt="" /> */}
      <img id="product-img" src="/src/assets/Images/1.jpg" alt="" />
      <h3>{about}</h3>
      <h4>{info}</h4>
      <h5>Review</h5>
      <p id="price">₹{price}</p>
     </Link>
      <button onClick={addToCart}>ADD TO CART</button> 
      
    </div>
  );
};

export default Cart;
