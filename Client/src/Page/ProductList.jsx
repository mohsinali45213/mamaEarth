import React, { useEffect, useState } from "react";
import { catProduct } from "../Function/Product";
import { subCatProduct } from "../Function/Product";
import { useLocation, useParams } from "react-router-dom";
import Cart from "../Components/Cart";
import Loading from "./Loading";
const ProductList = () => {
  const [cPro, setCPro] = useState();
  const [sCPro, setSCPro] = useState();
  const [search,setSearch] = useState("")
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

  // const handleSearch = (event) => {
  //   setSearch(event.target.value);
  // };

  // const filteredData = user?.filter((item) => {
  //   return item.username.toLowerCase().includes(searchTerm.toLowerCase());
  // });



  useEffect(() => {
    getProduct();
    getSubProduct();
  }, [location.pathname]);

  // console.log("Sub", sCPro);
  return (
    <div className="allProduct">
      {cPro ? (
        cPro?.map((item) => (
          <div key={item._id}>
            <Cart product={item} />
          </div>
        ))
      ) : (
        <Loading />
      )}
      {sCPro ? (
        sCPro?.map((item) => (
          <div key={item._id}>
            <Cart product={item} />
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProductList;
