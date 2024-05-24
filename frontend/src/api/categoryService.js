import axios from "axios"
import config from "../config/config"


export const getAllCategories = async () => {
    try {
        const res = await axios.get(`${config.backend_url}category/category_list/`)
        return res.data
    } catch (error) {
        console.log("categoryService::getAllCategories::error", error)
    }
}