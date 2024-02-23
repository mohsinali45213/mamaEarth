import React, { useEffect, useState } from "react";
import {
  allCategory,
  createCategory,
  updateCategory,
  removeCategory,
} from "../../Function/Category";
import DeletePopup from "../../Components/DeletePopup";
import Loading from "../../Page/Loading";
import CatPopup from "../../Components/CatPopup";
import Search from "../../Components/Search";

const Category = () => {
  const [category, setCategory] = useState();
  const [isDeletePopup,setIsDeletePopup] = useState(false);
  const [isInsUpPopup,setIsInsUpPopup] = useState(false)
  const [slug,setSlug] = useState("")
  const [name,setName] =useState("")
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCategory();
  }, [isInsUpPopup]);

  const fetchCategory = async () => {
    const result = await allCategory();
    setCategory(result.reverse());
  };

  const insertCategory =async (CategoryName) =>{
    await createCategory(CategoryName);
    fetchCategory();
    setIsInsUpPopup(false)
  }
  const putCategory = async(slug,CategoryName)=>{
      await updateCategory(slug,CategoryName)
    fetchCategory();
    setIsInsUpPopup(false)
  }

  const deleteCategory = async (slug) => {
    const result = await removeCategory(slug);
    fetchCategory()
    if(result){
      setIsDeletePopup(false)
    }
  };  


  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const filteredData = category?.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    category?
    
    <div className="c-container">
      <Search handleSearch={handleSearch} searchTerm={searchTerm} />
      <button id='btnNew' onClick={()=>{
        setIsInsUpPopup(true)
        setSlug("")
      }}>
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
          {filteredData?.map((cat, i) => (
            <tr key={cat?._id}>
              <td>{i + 1}</td>
              <td>{cat?.name}</td>
              <td>
                <i onClick={()=>{
                  setIsInsUpPopup(true)
                  setSlug(cat.slug)
                  setName(cat.name)
                  }} className="fa-solid fa-pen-to-square"></i>
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
      {isInsUpPopup&&<CatPopup setOpen={setIsInsUpPopup} insertCategory={insertCategory}
      putCategory={putCategory}
      name={name}
      slug={slug}
      setSlug={setSlug}
      />}
    </div>
    :<><Loading/></>
  );
};

export default Category;
