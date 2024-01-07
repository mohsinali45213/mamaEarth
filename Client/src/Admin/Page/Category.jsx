import React, { useEffect, useState } from "react";
import {
  allCategory,
  createCategory,
  updateCategory,
  removeCategory,
} from "../../Function/Category";
import DeletePopup from "../../Components/DeletePopup";
import Loading from "../../Page/Loading";

const Category = () => {
  const [category, setCategory] = useState();
  const [isDeletePopup,setIsDeletePopup] = useState(false);
  const [slug,setSlug] = useState("")
  useEffect(() => {
    fetchCategory();
  }, [""]);

  const fetchCategory = async () => {
    const result = await allCategory();
    setCategory(result.reverse());
  };

  const insertCategory =async (name) =>{
    await createCategory(name);
    fetchCategory();
  }
  const putCategory = async(slug,name)=>{
    const result  =  await updateCategory(slug,name)
    fetchCategory();
  }

  const deleteCategory = async (slug) => {
    const result = await removeCategory(slug);
    fetchCategory()
    if(result){
      setIsDeletePopup(false)
    }
  };  

  return (
    category?
    
    <div className="c-container">
      <button id='btnNew'>
        <i className="fa-solid fa-circle-plus"></i> New
      </button><br />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {category?.map((cat, i) => (
            <tr key={cat?._id}>
              <td>{i + 1}</td>
              <td>{cat?.name}</td>
              <td>
                <i className="fa-solid fa-pen-to-square"></i>
                <i onClick={()=>{
                setIsDeletePopup(true)
                setSlug(cat?.slug)
                }
                } className="fa-solid fa-trash"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isDeletePopup&&<DeletePopup setOpen={setIsDeletePopup} deleteCategory={deleteCategory} slug={slug}/>}
    </div>
    :<><Loading/></>
  );
};

export default Category;
