import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  loading: true,
  cartItems: [],
  orderItems:{
    order_Product:[],
  },
  total: 0,
  discount:0,
};

export const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    setCartFromLocalStorage: (state, action) => {
      state.cartItems = [...state.cartItems, ...action.payload.cartItems];
      state.total = action.payload.total
      state.discount = action.payload.discount
      state.orderItems =action.payload.orderItems

    },
    addToCart: (state, action) => {
      const { product } = action.payload;
      const currentCart = state.cartItems;
      const existingItemIndex = currentCart.findIndex(
        (item) => item._id === product._id
      );
      const existItem = currentCart.filter((item) => item._id === product._id);
      if (existingItemIndex != -1) {
        state.cartItems[existingItemIndex].qty += 1;
        state.cartItems[existingItemIndex].totalProPrice += product.price;
      } else {
        const updatedItem = {
          ...product,
          qty: 1,
          totalProPrice: product.price,
        };
        state.cartItems.push(updatedItem);
        toast.success("add to cart");
      }
      state.total = state.cartItems.reduce((total, item) => total + item.totalProPrice, 0);
      state.discount = state.total*5/100
    },

    incrementCartItem: (state, action) => {
      const { product } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item._id === product._id
      );
      if (existingItem) {
        existingItem.qty += 1;
        existingItem.totalProPrice += product.price;
        if (existingItem.qty === 0) {
          // toast.success("remove to cart");
          state.cartItems = state.cartItems.filter(
            (item) => item._id !== product._id
          );
        }
        toast.success("Cart updated");
      }
      state.total = state.cartItems.reduce((total, item) => total + item.totalProPrice, 0);
      state.discount = state.total*5/100
    },
    decrementCartItem: (state, action) => {
      const { product } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item._id === product._id
      );
      if (existingItem) {
        existingItem.qty -= 1;
        existingItem.totalProPrice -= product.price;
        // state.total-=product.price
        if (existingItem.qty === 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item._id !== product._id
          );
        }
        toast.success("Cart updated");
      }
      state.total = state.cartItems.reduce((total, item) => total + item.totalProPrice, 0);
      state.discount = state.total*5/100
    },

    orderInfo:(state,action)=>{
      if (action.payload.product) {
        state.orderItems.order_Product=action.payload.product
        state.orderItems.order_Price = state.orderItems.order_Product.total - state.orderItems.order_Product.discounts
      }
      // state.orderItems.order_Price =action.payload.price
    }
  },
});

export const {
  addToCart,
  totalPrice,
  incrementCartItem,
  decrementCartItem,
  setCartFromLocalStorage,
  orderInfo
} = cartReducer.actions;

export default cartReducer.reducer;
