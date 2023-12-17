import React, { useState } from "react";
import "../Style/Cart.css";

const Cart = ({ img, description, info, price }) => {
  // const addToCart = ()=>{
  //   const newItem = {img,description,info,price}
  //   const allItemInCart = JSON.parse(localStorage.getItem("cartItem")) || []
  //   localStorage.setItem("cartItem",JSON.stringify([...allItemInCart,newItem]))
  // }
  return (
    <div className="product-cart">
      <img id="product-img" src={img} alt="" />
      <h3>{description}</h3>
      <h4>{info}</h4>
      <h5>Review</h5>
      <p id="price">{price}</p>
      <button>ADD TO CART</button>
    </div>
  );
};

export default Cart;
