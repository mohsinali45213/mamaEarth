import React, { useEffect, useState } from "react";
import DeletePopup from "../../Components/DeletePopup";
import ProductPopup from "../../Components/ProductPopup";
import { allProduct } from "../../Function/Product";

const Products = () => {
  const [isProductPopup, setIsProductPopup] = useState(false);
  const [isDeletePopup,setIsDeletePopup] = useState(false)
  const [productList, setProductList] = useState();

  const fetchProduct = async () => {
    const result = await allProduct();
    setProductList(result);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="  ">
      <button id="btnNew" onClick={() => setIsProductPopup(true)}>
        <i className="fa-solid fa-circle-plus"></i> New
      </button>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productList?.map((product) => (
            <tr key={product._id}>
              <td id="p-td">
                <img src="/src/assets/Images/1.jpg" alt="" />
                <h5>{product?.title}</h5>
              </td>
              <td>{product?.subs?.name}</td>
              <td>{product.quantity}</td>
              <td>${product.price}</td>
              <td>{product.status}</td>
              <td>
                <i className="fa-solid fa-pen-to-square"></i>
                <i onClick={()=>setIsDeletePopup(true)} className="fa-solid fa-trash"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isProductPopup && <ProductPopup setOpen={setIsProductPopup} />}
      {isDeletePopup && <DeletePopup  setOpen={setIsDeletePopup} />}
    </div>
  );
};

export default Products;
