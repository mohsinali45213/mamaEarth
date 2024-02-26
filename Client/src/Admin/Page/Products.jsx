import React, { useEffect, useState } from "react";
import DeletePopup from "../../Components/DeletePopup";
import ProductPopup from "../../Components/ProductPopup";
import { allProduct, createProduct, removeProduct, updateProduct } from "../../Function/Product";
import Loading from "../../Page/Loading";
import Search from "../../Components/Search";

const Products = () => {
  const [isProductPopup, setIsProductPopup] = useState(false);
  const [isDeletePopup,setIsDeletePopup] = useState(false)
  const [productList, setProductList] = useState();
  const [updateData,setUpdateData] = useState();
  const [slug,setSlug] = useState();
  const [searchTerm, setSearchTerm] = useState('');       

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const result = await allProduct();
    setProductList(result);
  };

  const insertProduct=async(insertData)=>{
    const formData = new FormData()
    for (const key in insertData) {
      formData.append(key, insertData[key]);
    }
    const result = await createProduct(insertData)
    setIsProductPopup(false)
    fetchProduct()
  }

  const deleteProduct=async(slug)=>{
    const result = await removeProduct(slug);
    if(result){
      setIsDeletePopup(false)
    }
    fetchProduct()
    
  }

  const putProduct=async(slug,data)=>{
    const result = await updateProduct(slug,data)
    setIsProductPopup(false)
    fetchProduct();
  }

    
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const filteredData = productList?.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });


  return (
    productList?
    <div className="p-container">
      <Search handleSearch={handleSearch} searchTerm={searchTerm} />
      <button id="btnNew" onClick={() =>{
        setUpdateData("")
        setIsProductPopup(true)}}>
        <i className="fa-solid fa-circle-plus"></i> New
      </button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.map((product,i) => (
            <tr key={product._id}>
              <td>{i+1}</td>
              <td id="p-td">
                <img src={product?.images} alt="" />
                <h5>{product?.title}</h5>
              </td>
              <td>{product?.subs?.name}</td>
              <td>{product.quantity}</td>
              <td>₹{product.price}</td>
              <td>{product.status}</td>
              <td>
                <i onClick={()=>{
                  setUpdateData(product)
                  setIsProductPopup(true)
                }} className="fa-solid fa-pen-to-square" ></i>
                <i onClick={()=>{
                  setIsDeletePopup(true)
                  setSlug(product.slug)
                }} className="fa-solid fa-trash"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isProductPopup && <ProductPopup setOpen={setIsProductPopup} insertProduct={insertProduct} putProduct={putProduct} updateData={updateData} />}
      {isDeletePopup && <DeletePopup  setOpen={setIsDeletePopup} slug={slug}  deleteCategory={deleteProduct}/>}
    </div>:<><Loading/></>
  );
};

export default Products;
