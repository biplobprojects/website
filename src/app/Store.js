import { configureStore } from '@reduxjs/toolkit';
import userDet  from '../Features/UserDetails';
import productsReducer from '../Features/ProductSlice';
import cartReducer from '../Features/CartSlice';
export default configureStore({
  reducer: {
    userDet:userDet,
    products: productsReducer,
    cart: cartReducer,

  },
});