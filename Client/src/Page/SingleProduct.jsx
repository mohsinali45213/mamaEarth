import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { singleProduct } from "../Function/Product";
import "../Style/SinglePro.css";
import Loading from "./Loading";
const SingleProduct = () => {
  const { product } = useParams();
  const [pro, setPro] = useState();
  const location = useLocation();
  const [count,setCount] = useState(1)

  useEffect(() => {
    const getData = async () => {
      const result = await singleProduct(product);
      setPro(result);
    };
    getData();
  }, [location.pathname]);


  const increment =()=>{
    setCount(count+1)
  }
  const decrement =()=>{
    if(count>1){
      setCount(count-1)
    }
  }
  return (
      pro?
      <div className="single-main">
      <div className="single-sub">
        <img src="/src/assets/Images/1.jpg" alt="" />

        <div className="info">
          <h3 className="title">{pro?.about}</h3>
          <h4 className="sub-title">{pro?.info}</h4>
          <div className="count">
              <button id="minus" onClick={decrement}>
                -
              </button>
              <h4>{count}</h4>
              <button onClick={increment}>+</button>
            </div>
          <h5>₹{pro?.price}</h5>
          <div className="btnContainer">
            <button>Buy Now</button>
            <button>Add TO Cart</button>
          </div>
        </div>
      </div>
      <div className="description">
        <h3>Description</h3>
        <h4>{pro?.description}</h4>
      </div>
    </div>
    :<Loading/>
     );
};

export default SingleProduct;
