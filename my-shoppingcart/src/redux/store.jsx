import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; 
import wishlistReducer from "./wishlistSlice";  
import authReducer from "./authSlice";



const store = configureStore({
  reducer: {
    cart: cartReducer, 
    wishlist: wishlistReducer,  
    auth: authReducer,

  },
});

export default store;
