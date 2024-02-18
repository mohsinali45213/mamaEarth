import {combineReducers, combineSlices, configureStore} from '@reduxjs/toolkit';
import  cartReducer  from './redux/CartSlicer';
import userReducer  from './redux/UserSlice';


const rootReducer = combineReducers({
    cart:cartReducer,
    user:userReducer
})
export const store = configureStore({
    reducer:rootReducer
})