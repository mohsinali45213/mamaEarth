import React, { useEffect, useState } from "react";
import { allCategory } from "../Function/Category";
import MidBox from "./MidBox";
import "../Style/MidBox.css";

const SubCategoriesPopup = ({ setOpen,insertCategory,putSubCategory,slug,setSlug,name,parents,title}) => {
  const [category,setCategory]  = useState()
  const [categoryName,setCategoryName] = useState("")
  const [parentId,setParentId] = useState("")

  useEffect(() => {
    fetchCategory();
    setCategoryName(name)
  }, []);
  
  const fetchCategory = async () => {
    const result = await allCategory();
    setCategory(result.reverse());
  };
  return (
    <MidBox>
        <div className="cat-container">
          <h5>Insert subcategory you want to add</h5>
          <input type="text" value={categoryName} onChange={(e)=>setCategoryName(e.target.value)} />

          <select value={parentId} onChange={(e)=>setParentId(e.target.value)}>
          <option value="" disabled>--Select category--</option>
            {category?.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
          <div>
            <button onClick={() =>{
              setOpen(false)
              setSlug("")
            } } id="btn-left">
              Cancel
            </button>
            {
              slug?
              <button onClick={()=>putSubCategory(slug,categoryName,parentId)} id="btn-right">Update</button>
              :
              <button onClick={()=>insertCategory(categoryName,parentId)} id="btn-right">Save</button>
            }

          </div>
        </div>
    </MidBox>
  );
};

export default SubCategoriesPopup;
