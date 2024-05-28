import axios from "axios"
import config from "../config/config"

export const getBlogAllComments = async (blogId) => {
    try {
        const res = await axios.get(`${config.backend_url}comment/blog_comment_list/blog/${blogId}/`)
        return res.data
    } catch (error) {
        console.log("commentService::getBlogAllComments::error", error)
    }
}

export const createNewComment = async (blogId, authToken, description) => {
    try {
        const res = await axios.post(`${config.backend_url}comment/blog_comment_list/blog/${blogId}/`, {
            description
        },
            {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }
        )
        return res.data;
    } catch (error) {
        console.log("commentService::createNewComment::error", error)
    }
}