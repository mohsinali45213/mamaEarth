import React, { useEffect, useState } from "react";
import { allOrders } from "../../Function/Product";

const Order = () => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    const result = await allOrders();
    setOrder(result);
  };
 

  return (
    <div className="c-container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {order?.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td id="p-td">
                  <img src={item.orderdBy.userImage} alt="" />
                  <p>{item?.orderdBy?.username}</p>
                </td>
              <td>{item?.orderdBy?.address?.address}</td>
              <td>
                {item?.createdAt.slice(0, 10).split("-").reverse().join("-")}
              </td>
              <td>₹{
                  item?.products.reduce((total, current) => current.product.price*current.count + total,0)
                }</td>
              <td>{item?.orderStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
