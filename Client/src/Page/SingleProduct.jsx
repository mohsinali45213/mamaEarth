import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { singleProduct } from "../Function/Product";
import "../Style/SinglePro.css";
const SingleProduct = () => {
  const { product } = useParams();
  const [pro, setPro] = useState();
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      const result = await singleProduct(product);
      setPro(result);
    };
    getData();
  }, [location.pathname]);

  return (
    <div className="single-main">
      <div className="single-sub">
        <img src="/src/assets/Images/1.jpg" alt="" />

        <div className="info">
          <h3 className="title">{pro?.about}</h3>
          <h4 className="sub-title">{pro?.info}</h4>
          <div className="count">
              <button id="minus">
                -
              </button>
              <h4>{10}</h4>
              <button>+</button>
            </div>
          <h5>₹{pro?.price}</h5>
          <div className="btnContainer">
            <button>Buy Now</button>
            <button>Add TO Cart</button>
          </div>
        </div>
      </div>
      <div className="description">
        <h4>{pro?.description}</h4>
      </div>
    </div>
  );
};

export default SingleProduct;
