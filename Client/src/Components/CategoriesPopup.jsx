import React, { useEffect, useState } from "react";
import { allCategory } from "../Function/Category";
import MidBox from "./MidBox";
import "../Style/MidBox.css";

const CategoriesPopup = ({ setOpen,InUpCategory}) => {
  const [category,setCategory]  = useState()
  const [categoryName,setCategoryName] = useState("")
  const [parentId,setParentId] = useState("")

  useEffect(() => {
    fetchCategory();
  }, []);
  const fetchCategory = async () => {
    const result = await allCategory();
    setCategory(result.reverse());
  };
  
  return (
    <MidBox>
      <form>
        <div className="cat-container">
          <h5>Insert category you want to add</h5>
          <input type="text" value={categoryName} onChange={(e)=>setCategoryName(e.target.value)} />
          <select value={parentId} onChange={(e)=>setParentId(e.target.value)}>
          <option value="" disabled>Select a category</option>
            {category?.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
          <div>
            <button onClick={() => setOpen(false)} id="btn-left">
              Cancel
            </button>
            <button onClick={()=>InUpCategory(categoryName,parentId)} id="btn-right">Save</button>
          </div>
        </div>
      </form>
    </MidBox>
  );
};

export default CategoriesPopup;
