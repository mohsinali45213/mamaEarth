import React, { useEffect, useState } from "react";
import MidBox from "./MidBox";
import { allCategory } from "../Function/Category";
import { allSubCategory } from "../Function/SubCategory";
const ProductPopup = ({ setOpen }) => {
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [insetData,setInsertData] = useState(null)

  useEffect(() => {
    const fetching = async () => {
      const cat = await allCategory();
      const subCat = await allSubCategory();

      setCategory(cat);
      setSubCategory(subCat);
    };
    fetching();
    console.log(insetData);
  }, [insetData]);

  const handleInput = (e) => {
    setInsertData({...insetData,[e.target.name]:e.target.value})
    
  };

  return (
    <MidBox>
      <div className="pro-container">
        <h5>Insert Product you want to add</h5>
        <input onChange={handleInput} type="text" name="title" placeholder="Product name" />
        <input onChange={handleInput} type="text" name="about" placeholder="About" />
        <input onChange={handleInput} type="text" name="info" placeholder="Information" />
        <textarea  onChange={handleInput} rows="2" name="description" cols="89" placeholder="Description" />
        <input onChange={handleInput}  type="number" name="price" placeholder="Price" />

        <select onChange={handleInput} name="category"> 
          <option disabled >--Select Category--</option>
          {category?.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        <select onChange={handleInput} name="subs">  
          <option disabled  >--Select SubCategory--</option>
          {subCategory?.map((subCat) => (
            <option key={subCat._id} value={subCat._id}>
              {subCat.name}
            </option>
          ))}
        </select>

        <input onChange={handleInput}  type="number" name="quantity" placeholder="Quantity" />

        <select onChange={handleInput} name="status">  
          <option disabled  >--Status--</option>
          <option>Active</option>
          <option>Disable</option>
        </select>
        <input onChange={handleInput}  type="file" name="images" />
        <div id="btn-container">
          <button onClick={() => setOpen(false)} id="btn-left">
            Cancel
          </button>
          <button id="btn-right">Submit</button>
        </div>
      </div>
    </MidBox>
  );
};

export default ProductPopup;
