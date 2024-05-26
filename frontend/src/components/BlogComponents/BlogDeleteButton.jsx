import { MdDelete } from "react-icons/md";

const BlogDeleteButton = () => {
  return (
    <div>
      <MdDelete className="md:hover:scale-125 ease-in duration-150" size={40} />
    </div>
  );
};

export default BlogDeleteButton;
