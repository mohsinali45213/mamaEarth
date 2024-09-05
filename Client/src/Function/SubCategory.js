import axios from "axios";

const createSubCategory = async (name, parent) => {
  try {
    const createSub = await axios.post(`https://mamaearth-xlme.onrender.com/api/v1/sub`, {name, parent});
    // console.log(createSub.data);
    return createSub.data;  
  } catch (error) {
    console.log("SubCategory is not Created");
  }
};

const allSubCategory = async () => {
  try {
    const allSub = await axios.get(`https://mamaearth-xlme.onrender.com/api/v1/subs`);
    // console.log(allSub.data);
    return allSub.data;
  } catch (error) {
    console.log("SubCategory Is not fetch");
  }
};

const singleSubCategory = async (slug) => {
  try {
    const single = await axios.get(`https://mamaearth-xlme.onrender.com/api/v1/sub/${slug}`);
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
    const updateSub = await axios.put(`https://mamaearth-xlme.onrender.com/api/v1/sub/${slug}`,{name,parent});
    // console.log(updateSub.data);
    return updateSub.data;
  } catch (error) {
    console.log("SubCategory is not Update");
  }
};

const removeSubCategory = async (slug) => {
  try {
    const remove = await axios.delete(`https://mamaearth-xlme.onrender.com/api/v1/sub/${slug}`);
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
