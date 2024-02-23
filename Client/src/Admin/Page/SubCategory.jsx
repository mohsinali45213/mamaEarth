import React, { useEffect, useState } from "react";
import {
  allSubCategory,
  removeSubCategory,
  createSubCategory,
  updateSubCategory,
} from "../../Function/SubCategory";
import Loading from "../../Page/Loading";
import DeletePopup from "../../Components/DeletePopup";
import SubCategoriesPopup from "../../Components/SubCategoriesPopup";
import Search from "../../Components/Search";

const SubCategory = () => {
  const [subCategory, setSubCategory] = useState();
  const [isDeletePopup,setIsDeletePopup] = useState(false);
  const [isInsUpPopup,setIsInsUpPopup] = useState(false)
  const [parentId,setParentId] = useState("")
  const [slug,setSlug] = useState("")
  const [subCategoryName,setSubCategoryName] = useState("")
  const [searchTerm, setSearchTerm] = useState('');

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
   setIsInsUpPopup(false)
   setSubCategoryName("")
  }

  const deleteSubCategory = async (slug) => {
    const result = await removeSubCategory(slug);
    fetchSubCategory()
    if(result){
      setIsDeletePopup(false)
    }
  };


  
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const filteredData = subCategory?.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });


  return (
    subCategory?
    <div className="c-container">
      <Search handleSearch={handleSearch} searchTerm={searchTerm} />
      <button id='btnNew' onClick={()=>{
        setIsInsUpPopup(true)
        setSubCategoryName("")
      }}>
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
          {filteredData?.map((cat, i) => (
            <tr key={cat?._id}>
              <td>{i + 1}</td>
              <td>{cat?.name}</td>
              <td>
                <i onClick={()=>{
                  setIsInsUpPopup(true)
                  setSlug(cat?.slug)
                  setParentId(cat?._id)
                  setSubCategoryName(cat.name)
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
      {isInsUpPopup&&<SubCategoriesPopup setOpen={setIsInsUpPopup} insertCategory={insertSubCategory} putSubCategory={putSubCategory} slug={slug}parents={parentId} setSlug={setSlug} name={subCategoryName}
      title={{one:"1",two:"2"}}
      />}
    </div>:<><Loading/></>
  );
};

export default SubCategory;
