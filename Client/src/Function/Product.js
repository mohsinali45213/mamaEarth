import axios from "axios";
const createProduct = async (productDetail) => {
  try {
    const product = await axios.post(`http://localhost:3000/api/v1/product`, productDetail);
    return product.data;
    console.log(product.data);
  } catch (error) {
    console.log("Product Is not Created");
  }
};

const updateProduct = async (slug, productDetail) => {
  try {
    const update = await axios.post(`/product/${slug}`, productDetail);
    return update.data;
    console.log(update.data);
  } catch (error) {
    console.log("Product Is not Updated");
  }
};

const removeProduct = async (slug) => {
  try {
    const remove = await axios.delete(`/product/${slug}`);
    return remove.data;
    console.log(remove.data);
  } catch (error) {
    console.log("Product Is not Deleted");
  }
};

const singleProduct = async (slug) => {
  try {
    const singleProduct = await axios.get(`/product/${slug}`);
    return singleProduct.data;
    console.log(singleProduct.data);
  } catch (error) {
    console.log("Product Is not Created");
  }
};

const allProduct = async (slug) => {
  try {
    const allProduct = await axios.get(`/products`);
    console.log(allProduct.data);
    return allProduct.data;
  } catch (error) {
    console.log("Product Is not Find");
  }
};
export {
  updateProduct,
  removeProduct,
  createProduct,
  allProduct,
  singleProduct,
};
