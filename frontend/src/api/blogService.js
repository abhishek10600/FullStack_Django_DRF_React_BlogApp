import axios from "axios"
import config from "../config/config"

export const getAllBlogs = async () => {
    try {
        const res = await axios.get(`${config.backend_url}blog/blog_list/?ordering=-created_at`)
        return res.data
    } catch (error) {
        console.log("blogService::getAllBlogs::error", error)
    }
}

export const createNewBlog = async (authToken, blog_title, blog_description, category) => {
    try {
        const res = await axios.post(`${config.backend_url}blog/blog_list/`, {
            blog_title,
            blog_description,
            category
        }, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }
        )
        return res.data
    } catch (error) {
        console.log("blogService::createNewBlog::error", error)
    }
}

export const getBlog = async (blog_id) => {
    try {
        const res = await axios.get(`${config.backend_url}blog/blog_detail/${blog_id}/`);
        return res.data
    } catch (error) {
        console.log("blogService::getBlog::error", error)
    }
}