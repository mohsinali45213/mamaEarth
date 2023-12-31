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

allCategory();

const singleCategory =async()=>{
  try {
    const single  = await axios.get("/category/face")
    console.log(single.data);
    return single.data
  } catch (error) {
    console.log("Single Category is Not fetch::",error);
  }
}

const updateCategory=async ()=>{
  try {
    const update = await axios.put("/")
  } catch (error) {
    
  }
}