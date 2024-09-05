import axios from "axios";
const createProduct = async (productDetail) => {
  try {
    const product = await axios.post(
      `https://mamaearth-xlme.onrender.com/api/v1/product`,
      productDetail,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return product.data;
    // console.log(product.data);
  } catch (error) {
    console.log("Product Is not Created");
  }
};

const updateProduct = async (slug, productDetail) => {
  try {
    const product = await axios.put(
      `https://mamaearth-xlme.onrender.com/api/v1/product/${slug}`,
      productDetail,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return product.data;
    // console.log(product.data);
  } catch (error) {
    console.log("Product Is not Updated", error);
  }
};

const removeProduct = async (slug) => {
  try {
    const remove = await axios.delete(
      `https://mamaearth-xlme.onrender.com/api/v1/product/${slug}`
    );
    return remove.data;
    // console.log(remove.data);
  } catch (error) {
    console.log("Product Is not Deleted");
  }
};

const singleProduct = async (slug) => {
  try {
    const singleProduct = await axios.get(
      `https://mamaearth-xlme.onrender.com/api/v1/product/${slug}`
    );
    return singleProduct.data;
    // console.log(singleProduct.data);
  } catch (error) {
    console.log("Product Is not Get");
  }
};

const allProduct = async (slug) => {
  try {
    const allProduct = await axios.get(`https://mamaearth-xlme.onrender.com/api/v1/products`);
    // console.log(allProduct.data);
    return allProduct.data;
  } catch (error) {
    console.log("Product Is not Find");
  }
};

const catProduct = async (id) => {
  try {
    const catPro = await axios.get(`https://mamaearth-xlme.onrender.com/api/v1/catPro/${id}`);
    return catPro.data;
  } catch (error) {
    console.log("Product Is not Get");
  }
};

const subCatProduct = async (id) => {
  try {
    const sunCatPro = await axios.get(
      `https://mamaearth-xlme.onrender.com/api/v1/subCatPro/${id}`
    );
    return sunCatPro.data;
    // console.log(singleProduct.data);
  } catch (error) {
    console.log("Product Is not Get");
  }
};

const searchProduct = async (query) => {
  try {
    const result = await axios.post(
      `https://mamaearth-xlme.onrender.com/api/v1/search/filter`,
      { query }
    );
    return result.data;
  } catch (error) {
    console.log("Product is not search");
  }
};

const payment = async (cart) => {
  const pay = await axios.post(`https://mamaearth-xlme.onrender.com/api/v1/payment-intent`, {
    cart,
  });
  return pay.data;
};

const orderInfo = async (id, addInfo) => {
  const add = await axios.post(`https://mamaearth-xlme.onrender.com/api/v1/add-info/${id}`, {
    addInfo,
  });
};
const orderProduct = async (id, orderInfo) => {
  const add = await axios.post(`https://mamaearth-xlme.onrender.com/api/v1/order-info`, {
    id,
    orderInfo,
  });
};
const allOrders = async () => {
  const add = await axios.get(`https://mamaearth-xlme.onrender.com/api/v1/allorders`);
  return add.data
};
const userOrders = async (userId) => {
  const add = await axios.get(`https://mamaearth-xlme.onrender.com/api/v1/userorders/${userId}`);
  return add.data
};
export {
  updateProduct,
  removeProduct,
  createProduct,
  allProduct,
  singleProduct,
  catProduct,
  subCatProduct,
  searchProduct,
  payment,
  orderInfo,
  orderProduct,
  allOrders,
  userOrders
};
