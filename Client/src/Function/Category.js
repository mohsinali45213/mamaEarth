import axios from "axios";

const createCategory = async(name)=>{
  try {
    const create = await axios.post("/category",name)
    console.log("Category is created");
    return create.data
  } catch (error) {
    console.log("Category is not created::",error);
  }
}

const allCategory=async()=>{
  try {
    const list  = await axios.get("/categories")
    console.log(list.data);
    return list.data
  } catch (error) {
    console.log("All Category is Not fetch::",error);
  }
}

const singleCategory =async(slug)=>{
  try {
    const single  = await axios.get(`/category/${slug}`)
    console.log(single.data);
    return single.data
  } catch (error) {
    console.log("Single Category is Not fetch::",error);
  }
}

const updateCategory=async (slug)=>{
  try {
    const update = await axios.put(`/category/${slug}`)
    console.log(update.data);
    return update.data
  } catch (error) {
    console.log("Category Is not Update");
  }
}

const removeCategory=async (slug)=>{
  try {
    const remove = await axios.delete(`/category/${slug}`)
    console.log(remove.data);
    return remove.data
  } catch (error) {
    console.log("Category Is not Delete");
  }
}

const getSubs =async (parentID) =>{
  try {
    const subs  = await axios.get(`/categories/subs/${parentID}`)
    console.log(subs.data);
    return subs.data
  } catch (error) {
    console.log("Subs is not get..");
  }
}

export{
  createCategory,
  removeCategory,
  updateCategory,
  getSubs,
  allCategory,
  singleCategory
}