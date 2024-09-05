import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { singleProduct } from "../Function/Product";
import "../Style/SinglePro.css";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { addToCart, orderInfo } from "../redux/CartSlicer";
const SingleProduct = () => {
  const { product } = useParams();
  const [pro, setPro] = useState();
  const location = useLocation();
  const [count,setCount] = useState(1)
  const dispatch = useDispatch()
  useEffect(() => {
    const getData = async () => {
      const result = await singleProduct(product);
      setPro(result);
    };
    getData();
  }, [location.pathname]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product }));
  };

  const increment =()=>{
    setCount(count+1)
  }
  const decrement =()=>{
    if(count>1){
      setCount(count-1)
    }
  }

  const handleOrder = ()=>{
     if (pro) {
      dispatch(orderInfo({
        product:{
          cartItems:[
            {...pro,qty:count,totalProPrice:pro.price},
          ],
          total:pro.price*count,
          discount:pro.price*count*5/100
         
        }
      }))
     }
  }
  return (
      pro?
      <div key={pro._id} className="single-main">
      <div className="single-sub">
        <img src={pro?.images} alt="img" loading="lazy"/>

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
            <Link id="btnOrder" to="/checkout"><button onClick={handleOrder}>Buy Now</button></Link>
            <button id="btnOrder" onClick={()=>handleAddToCart(pro)}>Add TO Cart</button>
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
