import React, { useState } from "react";
import "../Style/AddCart.css";
const AddCart = ({ slid ,setSlid}) => {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className={`container ${slid ? "open" : ""}`}>
      <div className="head-container">
        <i onClick={()=>setSlid(false)} className="fa-solid fa-arrow-left"></i>
        <h3>My Cart</h3>
      </div>
      <div className="cart-container">
        <img src="/src/assets/Images/1.jpg" alt="" />
        <div className="info-container">
          <h5>Onion Hair Oil for Hair Regrowth and Hair Fall Control, 250ml</h5>
          <div className="price-container">
            <span>340$</span>
            <div className="count-container">
              <button id="minus" onClick={decrement}>
                -
              </button>
              <h4>{count}</h4>
              <button onClick={increment}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
