import React, { useEffect, useState } from "react";
import {
  allSubCategory,
  removeSubCategory,
  createSubCategory,
  updateSubCategory,
} from "../../Function/SubCategory";

const SubCategory = () => {
  const [subCategory, setSubCategory] = useState();

  useEffect(() => {
    fetchSubCategory();
  }, []);

  const fetchSubCategory = async () => {
    const result = await allSubCategory();
    setSubCategory(result.reverse());
    console.log(result);
  };


  const deleteSubCategory = async (slug) => {
    if(window.confirm(slug)){
      
    }
  };
  
  return (
    <div className="c-container">
      <button>
        <i className="fa-solid fa-circle-plus"></i> New
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {subCategory?.map((cat, i) => (
            <tr key={cat._id}>
              <td>{i + 1}</td>
              <td>{cat.name}</td>
              <td>
                <i className="fa-solid fa-pen-to-square"></i>
                <i onClick={()=>deleteSubCategory(cat.slug)} className="fa-solid fa-trash"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubCategory;
