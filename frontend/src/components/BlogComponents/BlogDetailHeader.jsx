import BlogDeleteButton from "./BlogDeleteButton";
import EditBlogButton from "./EditBlogButton";
import { useSelector } from "react-redux";

const BlogDetailHeader = ({ id, blog_title, author }) => {
  const userData = useSelector((state) => state.auth.userData);
  const userName = userData?.username;
  return (
    <div className="text-white flex my-8 justify-between items-center">
      <h1 className="md:text-3xl text-base font-bold text-blue-300">
        {blog_title}
      </h1>
      <div className="flex md:gap-4 gap-2">
        {userName === author ? (
          <>
            <EditBlogButton id={id} />
            <BlogDeleteButton id={id} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default BlogDetailHeader;
