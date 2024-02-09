import axios from "axios";
const createProduct = async (productDetail) => {
  try {
    const product = await axios.post(`http://localhost:3000/api/v1/product`, productDetail,{
      headers: {
        'Content-Type': 'multipart/form-data',
      }
  })
    return product.data;
    // console.log(product.data);
  } catch (error) {
    console.log("Product Is not Created");
  }
};

const updateProduct = async (slug, productDetail) => {
  try {
    const product = await axios.put(`http://localhost:3000/api/v1/product/${slug}`, productDetail,{
      headers: {
        'Content-Type': 'multipart/form-data',
      }
  })
    return product.data;
    // console.log(product.data);  
  } catch (error) {
    console.log("Product Is not Updated",error);
  }
};

const removeProduct = async (slug) => {
  try {
    const remove = await axios.delete(`http://localhost:3000/api/v1/product/${slug}`);
    return remove.data;
    // console.log(remove.data);
  } catch (error) {
    console.log("Product Is not Deleted");
  }
};

const singleProduct = async (slug) => {
  try {
    const singleProduct = await axios.get(`http://localhost:3000/api/v1/product/${slug}`);
    return singleProduct.data;
    // console.log(singleProduct.data);
  } catch (error) {
    console.log("Product Is not Get");
  }
};

const allProduct = async (slug) => {
  try {
    const allProduct = await axios.get(`http://localhost:3000/api/v1/products`);
    // console.log(allProduct.data);
    return allProduct.data;
  } catch (error) {
    console.log("Product Is not Find");
  }
};

const catProduct = async(id)=>{
  try {
    const catPro = await axios.get(`http://localhost:3000/api/v1/catPro/${id}`);
    return catPro.data;
  } catch (error) {
    console.log("Product Is not Get");
  }
}

const subCatProduct = async(id)=>{
  try {
    const sunCatPro = await axios.get(`http://localhost:3000/api/v1/subCatPro/${id}`);
    return sunCatPro.data;
    // console.log(singleProduct.data);
  } catch (error) {
    console.log("Product Is not Get");
  }
}
export {
  updateProduct,
  removeProduct,
  createProduct,
  allProduct,
  singleProduct,
  catProduct,
  subCatProduct
};
