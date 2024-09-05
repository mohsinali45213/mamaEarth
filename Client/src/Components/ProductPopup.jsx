import React, { useEffect, useState } from "react";
import MidBox from "./MidBox";
import { allCategory, getSubs } from "../Function/Category";
import { allSubCategory } from "../Function/SubCategory";
const ProductPopup = ({ setOpen,insertProduct,putProduct,updateData}) => {
  
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [insetData,setInsertData] = useState({})
  const [file,setFile] = useState();

  useEffect(() => {
    handleCat()
    setInsertData(updateData)
  },[]);

  const handleCat=async()=>{
    const cat = await allCategory();
    setCategory(cat);
  }

  const handleSubCat=async(e)=>{
    const subCat = await getSubs(e.target.value)
    setSubCategory(subCat)
  }

  const handleInput = (e) => {
    if (e.target.type === "file") {
      setInsertData({ ...insetData, [e.target.name]: e.target.files[0] });
    } else {
      setInsertData({ ...insetData, [e.target.name]: e.target.value });
    }
  };
  
  return (
    <MidBox>
      <div className="pro-container">
        <h5>Insert Product you want to add</h5>
        <input value={insetData?.title || ""} onChange={handleInput} type="text" name="title" placeholder="Product name" />
        <input value={insetData?.about || ""} onChange={handleInput} type="text" name="about" placeholder="About" />
        <input value={insetData?.info || ""} onChange={handleInput} type="text" name="info" placeholder="Information" />
        <textarea value={insetData?.description ||""}  onChange={handleInput} rows="2" name="description" cols="89" placeholder="Description" />
        <input value={insetData?.price || ""} onChange={handleInput}  type="number" name="price" placeholder="Price" />

        <select onChange={(e)=>{
          handleInput(e)
          handleSubCat(e)
        }} name="category" defaultValue={insetData?.category?.name ||"--Select Category--"}> 
          <option disabled >--Select Category--</option>
          {category?.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        <select defaultValue={insetData?.subs?.name || "--Select SubCategory--"} onChange={handleInput} name="subs">  
          <option disabled  >--Select SubCategory--</option>
          {subCategory?.map((subCat) => (
            <option key={subCat._id} value={subCat._id}>
              {subCat.name}
            </option>
          ))}
        </select>

        <input value={insetData?.quantity ||""} onChange={handleInput}  type="number" name="quantity" placeholder="Quantity" />

        <select onChange={handleInput} name="status" defaultValue="--Status--">  
          <option disabled>--Status--</option>
          <option>Active</option>
          <option>Disable</option>
        </select>
        <input onChange={handleInput} type="file" name="images" />
        <div id="btn-container">
          <button onClick={() => setOpen(false)} id="btn-left">Cancel</button>
          {
            updateData?
            <button onClick={()=>putProduct(updateData.slug,insetData)} id="btn-right">Update</button>
            :
          <button onClick={()=>insertProduct(insetData)} id="btn-right">Save</button>
          }
        </div>
      </div>
    </MidBox>
  );
};

export default ProductPopup;
