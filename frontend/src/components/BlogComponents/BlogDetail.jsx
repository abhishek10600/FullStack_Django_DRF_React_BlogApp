import BlogDetailHeader from "./BlogDetailHeader";
import moment from "moment";

const BlogDetail = ({
  id,
  blog_title,
  blog_description,
  created_at,
  author,
}) => {
  return (
    <div className="text-white md:px-4 px-5">
      <BlogDetailHeader blog_title={blog_title} author={author} id={id} />
      <p className="md:leading-10 md:text-lg text-justify leading-9 text-base">
        {blog_description}
      </p>
      <div className="flex justify-between items-center">
        <p className="my-8">
          Author: <span className="md:font-bold">{author}</span>
        </p>
        <p>{moment(created_at).calendar()}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
