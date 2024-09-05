import axios from "axios";

const createCategory = async (name) => {
  try {
    const create = await axios.post(`https://mamaearth-xlme.onrender.com/api/v1/category`,{name});
    // console.log("Category is created");
    return create.data;
  } catch (error) {
    console.log("Category is not created::", error);
  }
};
const allCategory = async () => {
  try {
    const list = await axios.get(`https://mamaearth-xlme.onrender.com/api/v1/categories`);
    // console.log(list.data);
    return list.data;
  } catch (error) {
    console.log("All Category is Not fetch::", error);
  }
};
const singleCategory = async (slug) => {
  try {
    const single = await axios.get(`https://mamaearth-xlme.onrender.com/api/v1/category/${slug}`);
    // console.log(single.data);
    return single.data;
  } catch (error) {
    console.log("Single Category is Not fetch::", error);
  }
};

const updateCategory = async (slug,name) => {
  try {
    const update = await axios.put(`https://mamaearth-xlme.onrender.com/api/v1/category/${slug}`,{name});
    // console.log(update.data);
    return update.data;
  } catch (error) {
    console.log("Category Is not Update");
  }
};

const removeCategory = async (slug) => {
  try {
    const remove = await axios.delete(`https://mamaearth-xlme.onrender.com/api/v1/category/${slug}`);
    // console.log(remove.data);
    return remove.data;
  } catch (error) {
    console.log("Category Is not Delete");
  }
};

const getSubs = async (parentID) => {
  try {
    const subs = await axios.get(`https://mamaearth-xlme.onrender.com/api/v1/categories/subs/${parentID}`);
    // console.log(subs.data);
    return subs.data;
  } catch (error) {
    console.log("Subs is not get..");
  }
};
export {
  createCategory,
  removeCategory,
  updateCategory,
  getSubs,
  allCategory,
  singleCategory,
};
