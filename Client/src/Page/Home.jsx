import React, { useEffect, useState } from "react";
import Cart from "../Components/Cart";
import "../Style/Home.css";
import { allProduct } from "../Function/Product";
import Loading from "./Loading";
const Home = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await allProduct();
      setProducts(result);
    };
    fetchData();
  }, []);

  return (
    <>
      {products ? (
        <div className="allProduct">
          {products?.map((item) => (
            <div key={item._id}>
              <Cart product={item} />
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
