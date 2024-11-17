import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addProduct(state, action){
            state?.push(action?.payload);
        },
        removeProduct(state, action){
            return state?.filter((item)=> item?.id !== action?.payload);
        }
    }
});

export const {addProduct, removeProduct} = cartSlice?.actions;
export default cartSlice.reducer;