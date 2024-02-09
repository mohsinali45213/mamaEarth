import React, { useEffect, useState } from "react";
import { catProduct } from "../Function/Product";
import { subCatProduct } from "../Function/Product";
import { useLocation, useParams } from "react-router-dom";
import Cart from "../Components/Cart";
const ProductList = () => {
  const [cPro, setCPro] = useState();
  const [sCPro, setSCPro] = useState();
  const { categoryId } = useParams();
  const location = useLocation();
  const getProduct = async () => {
    const result = await catProduct(categoryId);
    setCPro(result);
  };
  const getSubProduct = async () => {
    const result = await subCatProduct(categoryId);
    setSCPro(result);
  };

  useEffect(() => {
    getProduct();
    getSubProduct();
  }, [location.pathname]);

  const sliceAbout = (about) => {
    if (about.length > 50) {
      return about.slice(0, 50) + " ...";
    }
    return about.trim();
  };
  const sliceInfo = (info) => {
    if (info.length > 32) {
      return info.slice(0, 32) + " ...";
    }
    return info.trim();
  };
  // console.log("Sub", sCPro);
  return (
    <div className="allProduct">
      {cPro &&
        cPro?.map((item) => (
          <div key={item._id}>
            <Cart
              img={item.images}
              info={sliceInfo(item.info)}
              about={sliceAbout(item.about)}
              price={item.price}
              slug={item.slug}
            />
          </div>
        ))}
      {sCPro &&
        sCPro?.map((item) => (
          <div key={item._id}>
            <Cart
              img={item.images}
              info={sliceInfo(item.info)}
              about={sliceAbout(item.about)}
              price={item.price}
              slug={item.slug}
            />
          </div>
        ))}
    </div>
  );
};

export default ProductList;
