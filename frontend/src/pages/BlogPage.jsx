import { useParams } from "react-router-dom";
import { getBlog } from "../api/blogService";
import { useEffect, useState } from "react";
import BlogDetail from "../components/BlogComponents/BlogDetail";

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    getBlog(id).then((blog) => setBlog(blog));
  }, [id]);
  return (
    <div className="text-white md:max-w-[1240px] md:mx-auto">
      {blog ? <BlogDetail {...blog} /> : "Loding..."}
    </div>
  );
};

export default BlogPage;
