import axios from "axios";
const API_URL = `${import.meta.env.VITE_API_URL}`;
const createProduct = async (productDetail) => {
  try {
    const product = await axios.post(
      `${API_URL}/product`,
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
      `${API_URL}/product/${slug}`,
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
      `${API_URL}/product/${slug}`
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
      `${API_URL}/product/${slug}`
    );
    return singleProduct.data;
    // console.log(singleProduct.data);
  } catch (error) {
    console.log("Product Is not Get");
  }
};

const allProduct = async (slug) => {
  try {
    const allProduct = await axios.get(`${API_URL}/products`);
    // console.log(allProduct.data);
    return allProduct.data;
  } catch (error) {
    console.log("Product Is not Find");
  }
};

const catProduct = async (id) => {
  try {
    const catPro = await axios.get(`${API_URL}/catPro/${id}`);
    return catPro.data;
  } catch (error) {
    console.log("Product Is not Get");
  }
};

const subCatProduct = async (id) => {
  try {
    const sunCatPro = await axios.get(
      `${API_URL}/subCatPro/${id}`
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
      `${API_URL}/search/filter`,
      { query }
    );
    return result.data;
  } catch (error) {
    console.log("Product is not search");
  }
};

const payment = async (cart) => {
  const pay = await axios.post(`${API_URL}/payment-intent`, {
    cart,
  });
  return pay.data;
};

const orderInfo = async (id, addInfo) => {
  const add = await axios.post(`${API_URL}/add-info/${id}`, {
    addInfo,
  });
};
const orderProduct = async (id, orderInfo) => {
  const add = await axios.post(`${API_URL}/order-info`, {
    id,
    orderInfo,
  });
};
const allOrders = async () => {
  const add = await axios.get(`${API_URL}/allorders`);
  return add.data
};
const userOrders = async (userId) => {
  const add = await axios.get(`${API_URL}/userorders/${userId}`);
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
