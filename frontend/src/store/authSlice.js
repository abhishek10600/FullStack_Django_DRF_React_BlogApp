import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    status: false,
    authToken: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.authToken = action.payload.authToken
        },
        logout: (state) => {
            state.status = false;
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer