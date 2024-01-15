import React from "react";
import MidBox from "./MidBox";

const ProductPopup = ({setOpen}) => {
  return (
    <MidBox>
      <div className="pro-container" >
        <h5>Insert Product you want to add</h5>
        <input type="text" placeholder="Product name" />
        <input type="text" placeholder="About" />
        <input type="text" placeholder="Information"/>
        <textarea rows="2"cols="89" placeholder="Description"/>
        <input type="number" placeholder="Price"/>
        <select>
          <option>--Select Category--</option>
        </select>
        <select>
          <option>--Select SubCategory--</option>
        </select>
        <input type="number" placeholder="Quantity"/>
        <select>
          <option>--Status--</option>
        </select>
        <input type="file" />
        <div id="btn-container">
        <button onClick={()=>setOpen(false)} id="btn-left">Cancel</button>
        <button id="btn-right">Submit</button>
        </div>
      </div>
    </MidBox>
  );
};

export default ProductPopup;
