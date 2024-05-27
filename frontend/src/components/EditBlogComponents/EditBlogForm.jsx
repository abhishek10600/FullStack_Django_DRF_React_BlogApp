import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getBlog, updateBlog } from "../../api/blogService";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditBlogForm = ({ blogId }) => {
  const navigate = useNavigate();
  const categories = useSelector((state) => state.category.categories);
  const [blog_title, setBlogTitle] = useState("");
  const [blog_description, setBlogDescription] = useState("");
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    getBlog(blogId).then((blog) => {
      setBlogTitle(blog.blog_title);
      setBlogDescription(blog.blog_description);
      setCategory(blog.category);
    });
  }, []);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      setLoading(true);
      const blog = await updateBlog(
        authToken,
        blogId,
        blog_title,
        blog_description,
        category
      );
      if (blog) {
        toast.success("Blog updated successfully.");
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center md:gap-10 mx-4 gap-5"
    >
      <input
        required
        className="md:py-4 md:px-2 text-black py-3 px-2"
        type="text"
        value={blog_title}
        placeholder="Title"
        onChange={(ev) => setBlogTitle(ev.target.value)}
      />
      <textarea
        required
        rows="10"
        className="md:py-4 md:px-2 text-black py-3 px-2"
        value={blog_description}
        placeholder="Description"
        onChange={(ev) => setBlogDescription(ev.target.value)}
      />
      <select
        className="text-black md:px-2 md:py-4 py-3 px-2"
        onChange={(ev) => setCategory(ev.target.value)}
      >
        <option>Select a category</option>
        {categories?.map((category) => (
          <option className="md:px-2" key={category.id} value={category.id}>
            {category.category_name[0].toUpperCase() +
              category.category_name.slice(1)}
          </option>
        ))}
      </select>
      <button type="submit" className="bg-blue-500 md:py-4 text-black py-3">
        {loading ? "Loading..." : "Make Changes"}
      </button>
    </form>
  );
};

export default EditBlogForm;
