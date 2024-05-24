import axios from "axios"
import config from "../config/config"

export const getAllBlogs = async () => {
    const res = await axios.get(`${config.backend_url}blog/blog_list/?ordering=-created_at`)
    return res.data
}

export const createNewBlog = async (authToken, blog_title, blog_description, category) => {
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
}