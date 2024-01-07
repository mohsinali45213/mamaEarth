import React, { useEffect, useState } from "react";
import {
  allSubCategory,
  removeSubCategory,
  createSubCategory,
  updateSubCategory,
} from "../../Function/SubCategory";
import Loading from "../../Page/Loading";
import DeletePopup from "../../Components/DeletePopup";
import CategoriesPopup from "../../Components/CategoriesPopup";

const SubCategory = () => {
  const [subCategory, setSubCategory] = useState();
  const [isDeletePopup,setIsDeletePopup] = useState(false);
  const [isInsUpPopup,setIsInsUpPopup] = useState(false)
  const [slug,setSlug] = useState()

  useEffect(() => {
    fetchSubCategory();
  }, [isInsUpPopup]);

  const fetchSubCategory = async () => {
    const result = await allSubCategory();
    setSubCategory(result.reverse());
  };

  const insertSubCategory =async(name,id) =>{
    await createSubCategory(name,id)
    fetchSubCategory()
    setIsInsUpPopup(false)
  }

  const putSubCategory =async(slug,name,id)=>{
   await updateSubCategory(slug,name,id)
   fetchSubCategory()
  }

  const deleteSubCategory = async (slug) => {
    const result = await removeSubCategory(slug);
    fetchSubCategory()
    if(result){
      setIsDeletePopup(false)
    }
  };
  return (
    <div className="c-container">
      <button id='btnNew' onClick={()=>setIsInsUpPopup(true)}>
        <i className="fa-solid fa-circle-plus"></i> New
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {subCategory?.map((cat, i) => (
            <tr key={cat?._id}>
              <td>{i + 1}</td>
              <td>{cat?.name}</td>
              <td>
                <i onClick={()=>{
                  setIsInsUpPopup(true)
                }} className="fa-solid fa-pen-to-square"></i>
                <i onClick={()=>{
                  setIsDeletePopup(true);
                  setSlug(cat?.slug)
                }} className="fa-solid fa-trash"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isDeletePopup&&<DeletePopup setOpen={setIsDeletePopup} deleteCategory={deleteSubCategory} slug={slug}/>}
      {isInsUpPopup&&<CategoriesPopup setOpen={setIsInsUpPopup} insertCategory={insertSubCategory}
      title={{one:"1",two:"2"}}
      />}
    </div>
  );
};

export default SubCategory;
