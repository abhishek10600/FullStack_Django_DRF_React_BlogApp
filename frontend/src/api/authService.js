import axios from "axios";
import config from "../config/config";

export const register = async (username, email, password) => {
    try {
        const res = await axios.post(`${config.backend_url}account/register/`, { username, email, password })
        return res.data
    } catch (error) {
        console.log("authService::register::error", error)
    }
}

export const login = async (username, password) => {
    try {
        const res = await axios.post(`${config.backend_url}account/api/token/`, { username, password });
        return res.data

    } catch (error) {
        console.log("authService::login::error", error)
    }
}

export const getCurrentUser = async (authToken) => {
    try {
        const res = await axios.get(`${config.backend_url}account/current_user/`, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        })
        return res.data
    } catch (error) {
        console.log("authService::getCurrentUser::error", error)
    }
}
