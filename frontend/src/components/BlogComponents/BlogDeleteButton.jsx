import { MdDelete } from "react-icons/md";
import { deleteBlog } from "../../api/blogService";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BlogDeleteButton = ({ id }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const authToken = localStorage.getItem("authToken");
  const handleButtonClick = async () => {
    try {
      setLoading(true);
      deleteBlog(authToken, id).then(() => {
        toast.success("Blog deleted successfully.");
        setLoading(false);
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(true);
  };

  return (
    <button onClick={handleButtonClick}>
      {loading ? (
        "Deleing..."
      ) : (
        <MdDelete
          className="md:hover:scale-125 ease-in duration-150"
          size={40}
        />
      )}
    </button>
  );
};

export default BlogDeleteButton;
