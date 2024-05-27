import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";

const EditBlogButton = ({ id }) => {
  return (
    <Link to={`/blog-edit/${id}`}>
      <CiEdit className="md:hover:scale-125 ease-in duration-150" size={40} />
    </Link>
  );
};

export default EditBlogButton;
