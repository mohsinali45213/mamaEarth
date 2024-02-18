import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  loading: true,
  cartItems: [],
  total: 0,
};

export const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    setCartFromLocalStorage: (state, action) => {
      state.cartItems = [...state.cartItems,...action.payload]
    },
    addToCart: (state, action) => {
      const { product } = action.payload;
      const currentCart = state.cartItems;
      const existingItemIndex = currentCart.findIndex(item => item._id === product._id);
      const existItem = currentCart.filter((item) => item._id === product._id);
      if (existingItemIndex != -1) {
        state.cartItems[existingItemIndex].qty += 1;
        state.cartItems[existingItemIndex].totalProPrice+= product.price;

      } else {
        const updatedItem = { ...product, qty: 1 ,totalProPrice:product.price};
        state.cartItems.push(updatedItem);
        toast.success("add to cart");
      }
    },
    incrementCartItem : (state ,action) =>{
      const { product } = action.payload;
      const existingItem = state.cartItems.find(item => item._id === product._id);
      if (existingItem) {
        existingItem.qty += 1;
        existingItem.totalProPrice += product.price;
        if (existingItem.qty === 0) {
          // toast.success("remove to cart");
          state.cartItems = state.cartItems.filter(item => item._id !== product._id);
        }
        toast.success("Cart updated");
      }

    },
    decrementCartItem : (state ,action) =>{
      const { product } = action.payload;
      const existingItem = state.cartItems.find(item => item._id === product._id);
      if (existingItem) {
        existingItem.qty -= 1;
        existingItem.totalProPrice -= product.price;
        if (existingItem.qty === 0) {
          state.cartItems = state.cartItems.filter(item => item._id !== product._id);
        }
        toast.success("Cart updated");
      }

    },
    removeCartItem: (state, action) => {
      state.loading = true;
      state.cartItems = state.cartItems.filter(
        (i) => i.productId !== action.payload
      );
      state.loading = false;
    },

    calculatePrice: (state) => {
      const subtotal = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      state.subtotal = subtotal;
      state.shippingCharges = state.subtotal > 1000 ? 0 : 200;
      state.tax = Math.round(state.subtotal * 0.18);
      state.total =
        state.subtotal + state.tax + state.shippingCharges - state.discount;
    },

    // discountApplied: (state, action) => {
    //   state.discount = action.payload;
    // },
    saveShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
    },
    resetCart: () => initialState,
  },
});

export const {
  addToCart,
  removeCartItem,
  calculatePrice,
  // discountApplied,
  saveShippingInfo,
  incrementCartItem,
  resetCart,
  decrementCartItem,
  setCartFromLocalStorage
} = cartReducer.actions;

export default cartReducer.reducer;
