import { createSlice } from "@reduxjs/toolkit";

const initialState= [];

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        loginUser(state, action){
            state?.push(action?.payload);
        },
        logOut(state, action){
            state?.pop(action?.payload);
        }
    }
});

export const {loginUser, logOut} = authSlice?.actions;
export default authSlice.reducer;