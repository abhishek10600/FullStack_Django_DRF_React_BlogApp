import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categorySlice from "./categorySlice";
import blogSlice from "./blogSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        category: categorySlice,
        blog: blogSlice
    }
})

export default store