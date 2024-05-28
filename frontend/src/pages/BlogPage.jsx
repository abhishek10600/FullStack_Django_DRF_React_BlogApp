import { Link, useParams } from "react-router-dom";
import { getBlog } from "../api/blogService";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BlogDetail from "../components/BlogComponents/BlogDetail";
import CommentHeader from "../components/CommentComponents/CommentHeader";
import CommentForm from "../components/CommentComponents/CommentForm";
import Comments from "../components/CommentComponents/Comments";

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    getBlog(id).then((blog) => setBlog(blog));
  }, [id]);
  return (
    <div className="text-white md:max-w-[1240px] md:mx-auto">
      {blog ? <BlogDetail {...blog} /> : "Loding..."}
      <hr />
      <CommentHeader />
      {authStatus && <CommentForm blogId={id} setRefresh={setRefresh} />}
      {!authStatus && (
        <Link
          to="/login"
          className="mx-4 bg-red-500 md:text-xl md:px-4 md:py-2 md:rounded-xl text-sm py-1 px-2 rounded-lg"
        >
          Login To Create Your Blogs
        </Link>
      )}
      <Comments blogId={id} refresh={refresh} />
    </div>
  );
};

export default BlogPage;
