import React, { useEffect, useState } from "react";
import {
  allCategory,
  createCategory,
  updateCategory,
  removeCategory,
} from "../../Function/Category";

const Category = () => {
  const [category, setCategory] = useState();

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    const result = await allCategory();
    setCategory(result.reverse());
  };


  const deleteCategory = async (slug) => {
    const result = await removeCategory(slug);
    fetchCategory()
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
          {category?.map((cat, i) => (
            <tr key={cat._id}>
              <td>{i + 1}</td>
              <td>{cat.name}</td>
              <td>
                <i className="fa-solid fa-pen-to-square"></i>
                <i onClick={()=>deleteCategory(cat.slug)} className="fa-solid fa-trash"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Category;
