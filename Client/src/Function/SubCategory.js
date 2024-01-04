import axios from "axios";

const createSubCategory = async (name, parentID) => {
  try {
    const createSub = await axios.post(`http://localhost:3000/api/v1/sub`, name, parentID);
    console.log(createSub.data);
    return createSub.data;
  } catch (error) {
    console.log("SubCategory is not Created");
  }
};

const allSubCategory = async () => {
  try {
    const allSub = await axios.get(`http://localhost:3000/api/v1/subs`);
    console.log(allSub.data);
    return allSub.data;
  } catch (error) {
    console.log("SubCategory Is not fetch");
  }
};

const singleSubCategory = async (slug) => {
  try {
    const single = await axios.get(`http://localhost:3000/api/v1/sub/${slug}`);
    console.log(single.data);
    return single.data;
  } catch (error) {
    console.log(" singleSubCategory is not get");
  }
};

const updateSubCategory = async (slug) => {
  try {
    const updateSub = await axios.put(`http://localhost:3000/api/v1/sub/${slug}`);
    console.log(updateSub.data);
    return updateSub.data;
  } catch (error) {
    console.log("SubCategory is not Update");
  }
};

const removeSubCategory = async (slug) => {
  try {
    const remove = await axios.delete(`http://localhost:3000/api/v1/sub/${slug}`);
    console.log(remove.data);
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
