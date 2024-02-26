import React, { useEffect, useState } from "react";
import { userOrders } from "../Function/Product";
import "../Style/YourOrder.css";
const YourOrder = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const useId = JSON.parse(localStorage.getItem("user"));
      if (useId) {
        const result = await userOrders(useId);
        setOrder(result);
      }
    };
    getData();
  }, []);

  return (
    <div className="o-wrapper">
      {order?.map((item) => (
        <div key={item._id} className="o-container">
          <div className="o-heading">
            <div>
              <h5>Order Place On</h5>
              <h4>
                {item?.createdAt.slice(0, 10).split("-").reverse().join("-")}
              </h4>
            </div>
            <div>
              <h5>Total Price</h5>
              <h4>
                ₹
                {
                  item?.products.reduce((total, current) => current.product.price*current.count + total,0)
                }
              </h4>
            </div>
            <div>
              <h5>Ship To</h5>
              <h4>{item?.orderdBy?.username}</h4>
            </div>
            <div>
              <h5>Order Id</h5>
              <h4>{item._id}</h4>
            </div>
          </div>
          <div className="o-body">
            <div className="o-img">
              <div>
                <img src={item?.products[0]?.product?.images} alt="" />
              </div>
            </div>
            <div>
              <div>
                <h5>{item.products.length} Items</h5>
                <h5>Order Id:{item._id}</h5>
                <h2>{item?.orderStatus}</h2>
                <h3>Cancel</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YourOrder;
