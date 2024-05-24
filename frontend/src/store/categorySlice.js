import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getAllCategories } from "../api/categoryService"


export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
    const res = await getAllCategories()
    return res;
})

const initialState = {
    categories: null,
    isLoading: false,
    isError: false
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories = action.payload
        })
        builder.addCase(fetchCategories.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.isError = true;
        })
    }
})

export default categorySlice.reducer