import {
  combineReducers,
  combineSlices,
  configureStore,
} from "@reduxjs/toolkit";
import cartReducer, { setCartFromLocalStorage } from "./redux/CartSlicer";
import userReducer from "./redux/UserSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem(
    "localCart",
    JSON.stringify({
      cartItems: state?.cart?.cartItems,
      total: state?.cart?.total,
      discount: state?.cart?.discount,
      orderItems: state?.cart?.orderItems
    })
  );
});

const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("localCart");
  if (storedCart) {
    const parsedCart = JSON.parse(storedCart);
    store.dispatch(setCartFromLocalStorage(parsedCart));
  }
};
loadCartFromLocalStorage();
