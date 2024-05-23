import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const CreatePostButton = () => {
  return (
    <Link to="/new-blog">
      <CiSquarePlus
        className="md:hover:scale-125 ease-in duration-150"
        size={50}
      />
    </Link>
  );
};

export default CreatePostButton;
