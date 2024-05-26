import moment from "moment";
import { Link } from "react-router-dom";

const BlogCard = ({
  id,
  author,
  blog_title,
  blog_description,
  created_at,
  category_id,
}) => {
  return (
    <Link
      to={`blog/${id}`}
      className="px-4 flex flex-col gap-5 border border-blue-300 rounded-lg py-4"
    >
      <h1 className="text-2xl">{blog_title}</h1>
      <p>{blog_description.slice(0, 15) + "..."}</p>
      <div className="flex justify-between">
        <span>Posted By: {author}</span>
        <span className="text-gray-500">
          posted {moment(created_at).fromNow()}
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
