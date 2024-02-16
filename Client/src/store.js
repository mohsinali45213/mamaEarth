import {configureStore} from '@reduxjs/toolkit';
import  cartReducer  from './redux/CartSlicer';

export const store = configureStore({
    reducer: cartReducer
})