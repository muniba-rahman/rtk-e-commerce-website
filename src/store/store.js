import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";

export const store = configureStore({
    reducer:{
        cart: cartSlice,
        auth: authSlice
    }
});