import React, { useEffect, useState } from "react";
import Cart from "../Components/Cart";
import "../Style/Home.css";
import { allProduct } from "../Function/Product";
import Loading from "./Loading";
import Header from "../Components/Header/Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [products, setProducts] = useState();
  const [search,setSearch] = useState("lip")
  const navigator = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      const result = await allProduct();
      setProducts(result);
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    if (search ===null) {
      navigator("/")
    }
  };

  const filteredData = products?.filter((item) => {
    return item?.subs.name.toLowerCase().includes(search?.toLowerCase()?.trim());
  });

  console.log(filteredData);

  return (
    <>
    <Header handleSearch={handleSearch}/>
      {filteredData?.length !==0  ? (
        <div className="allProduct">
          {filteredData?.map((item) => (
            <div key={item._id}>
              <Cart product={item} />
            </div>
          ))}
        </div>
      ) : (
        <h2 style={{textAlign:"center",marginTop:"1rem",fontFamily:"monospace",fontSize:"2em"}}>Product Not Found</h2>
      )}
      <Footer/>
    </>
  );
};

export default Search;
