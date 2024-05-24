import BlogCard from "../components/HomeComponents/BlogCard";
import BlogHeader from "../components/HomeComponents/BlogHeader";
import CategoryHeaders from "../components/HomeComponents/CategoryHeaders";
import CreatePostButton from "../components/HomeComponents/CreatePostButton";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../store/blogSlice";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  const postData = useSelector((state) => state.blog.blogs);
  const postLoading = useSelector((state) => state.blog.isLoading);
  return (
    <div className="text-white md:max-w-[1240px] md:mx-auto">
      <div className="home-categories">
        <CategoryHeaders />
      </div>
      <div className="blogs">
        <div className="flex my-10 px-4 justify-between items-center">
          <BlogHeader />
          {authStatus && <CreatePostButton />}
          {!authStatus && (
            <Link
              to="/login"
              className="bg-red-500 md:text-xl md:px-4 md:py-2 md:rounded-xl text-sm py-1 px-2 rounded-lg"
            >
              Login To Create Your Blogs
            </Link>
          )}
        </div>
        <div className="blog-container flex flex-col gap-10 px-4 my-4">
          {!postLoading &&
            postData?.map((item) => (
              <BlogCard
                key={item.id}
                id={item.id}
                author={item.author}
                blog_title={item.blog_title}
                blog_description={item.blog_description}
                created_at={item.created_at}
                category_id={item.category}
              />
            ))}
          {postLoading && (
            <div>
              <h1 className="text-white">Loading...</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
