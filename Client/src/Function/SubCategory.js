import axios from "axios";
const API_URL = `${import.meta.env.VITE_API_URL}`;

const createSubCategory = async (name, parent) => {
  try {
    const createSub = await axios.post(`${API_URL}/sub`, {name, parent});
    // console.log(createSub.data);
    return createSub.data;  
  } catch (error) {
    console.log("SubCategory is not Created");
  }
};

const allSubCategory = async () => {
  try {
    const allSub = await axios.get(`${API_URL}/subs`);
    // console.log(allSub.data);
    return allSub.data;
  } catch (error) {
    console.log("SubCategory Is not fetch");
  }
};

const singleSubCategory = async (slug) => {
  try {
    const single = await axios.get(`${API_URL}/sub/${slug}`);
    // console.log(single.data);
    return single.data;
  } catch (error) {
    console.log(" singleSubCategory is not get");
  }
};

const updateSubCategory = async (slug,name,parent) => {
  console.log(slug);
  console.log(name);
  console.log(parent);
  try {
    const updateSub = await axios.put(`${API_URL}/sub/${slug}`,{name,parent});
    // console.log(updateSub.data);
    return updateSub.data;
  } catch (error) {
    console.log("SubCategory is not Update");
  }
};

const removeSubCategory = async (slug) => {
  try {
    const remove = await axios.delete(`${API_URL}/sub/${slug}`);
    // console.log(remove.data);
    return remove.data;
  } catch (error) {
    console.log("SubCategory is not delete");
  }
};

export {
  createSubCategory,
  updateSubCategory,
  removeSubCategory,
  allSubCategory,
  singleSubCategory,
};
