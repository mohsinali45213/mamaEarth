import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}`;
const createCategory = async (name) => {
  try {
    const create = await axios.post(`${API_URL}/category`,{name});
    // console.log("Category is created");
    return create.data;
  } catch (error) {
    console.log("Category is not created::", error);
  }
};
const allCategory = async () => {
  try {
    const list = await axios.get(`${API_URL}/categories`);
    // console.log(list.data);
    return list.data;
  } catch (error) {
    console.log("All Category is Not fetch::", error);
  }
};
const singleCategory = async (slug) => {
  try {
    const single = await axios.get(`${API_URL}/category/${slug}`);
    // console.log(single.data);
    return single.data;
  } catch (error) {
    console.log("Single Category is Not fetch::", error);
  }
};

const updateCategory = async (slug,name) => {
  try {
    const update = await axios.put(`${API_URL}/category/${slug}`,{name});
    // console.log(update.data);
    return update.data;
  } catch (error) {
    console.log("Category Is not Update");
  }
};

const removeCategory = async (slug) => {
  try {
    const remove = await axios.delete(`${API_URL}/category/${slug}`);
    // console.log(remove.data);
    return remove.data;
  } catch (error) {
    console.log("Category Is not Delete");
  }
};

const getSubs = async (parentID) => {
  try {
    const subs = await axios.get(`${API_URL}/categories/subs/${parentID}`);
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
