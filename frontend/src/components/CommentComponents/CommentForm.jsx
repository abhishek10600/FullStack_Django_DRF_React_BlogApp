import toast from "react-hot-toast";
import { createNewComment } from "../../api/commentService";
import { useState } from "react";

const CommentForm = ({ blogId, setRefresh }) => {
  const authToken = localStorage.getItem("authToken");
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (description === "") {
      alert("Description is empty");
    } else {
      setLoading(true);
      try {
        const comment = await createNewComment(blogId, authToken, description);
        if (comment) {
          setRefresh(true);
          toast.success("Your comment has been added successfully.");
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="text-white px-4">
      <textarea
        rows={6}
        className="block w-full p-2 text-black"
        placeholder="Write your comment here..."
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 md:py-2 md:px-4 my-4 py-1 px-4"
      >
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default CommentForm;
