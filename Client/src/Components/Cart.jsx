import React, { useEffect, useState } from "react";
import "../Style/Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ product }) => {
  const [cart,cartItem] = useState([])
  const addToCart =()=>{
    const existItem =JSON.parse(localStorage.getItem("cart"))
    // if(existItem !=null){}
    // existItem?.map((item)=>(
    //   item.id ===product._id ? 
    //   cartItem([...existItem,{qty:item.qty+1}])
    //   :cartItem([...existItem,{product, qty:1}])
    // ))
    // localStorage.setItem("cart",JSON.stringify(cart))
  }

  console.log(cart);
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
        <img id="product-img" src={product?.images} alt="" />
        <h3>{sliceAbout(product?.about)}</h3>
        <h4>{sliceInfo(product?.info)}</h4>
        <h5>Review</h5>
        <p id="price">₹{product?.price}</p>
      </Link>
      <button onClick={addToCart}>ADD TO CART</button>
    </div>
  );
};

export default Cart;
