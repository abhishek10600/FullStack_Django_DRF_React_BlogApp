import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getAllBlogs } from "../api/blogService"

export const fetchBlogs = createAsyncThunk("fetchBlogs", async () => {
    const res = await getAllBlogs()
    return res
})

const initialState = {
    blogs: null,
    isLoading: false,
    isError: false
}

const blogSlice = createSlice({
    name: "blog",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchBlogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.blogs = action.payload
        })
        builder.addCase(fetchBlogs.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchBlogs.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.isError = true;
        })
    }
    // reducers: {
    //     addNewBlog: (state, action) => {
    //         const newBlog = action.payload.blogs
    //         state.blogs.push(newBlog)
    //     },
    // }
})

// export const { addNewBlog } = blogSlice.actions

export default blogSlice.reducer