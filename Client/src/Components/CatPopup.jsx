import React, { useEffect, useState } from "react";
import MidBox from "./MidBox";

const CatPopup = ({setOpen,insertCategory,putCategory,setSlug,name,slug}) => {
  const [catName,setCatName] = useState("")
  useEffect(()=>{
    slug?
    setCatName(name)
    :setCatName("")
  },[false])
  return (
    <MidBox>
      <div className="cat-container">
        <h5>Insert category you want to add</h5>
        <input type="text" value={catName} onChange={(e)=>setCatName(e.target.value)}/>
        <div>
          <button id="btn-left" onClick={()=>{
            setOpen(false)
            setSlug("")
          }}>Cancel</button>
          {
            slug?
            <button type="submit" id="btn-right" onClick={()=>{
              putCategory(slug,catName)
            }}>Update</button>
            :<button type="submit" id="btn-right" onClick={()=>{
              insertCategory(catName)
              }}>Save</button>
          }
        </div>
      </div>
    </MidBox>
  );
};

export default CatPopup;
