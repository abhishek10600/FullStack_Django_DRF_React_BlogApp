import { useState } from "react";
import { useSelector } from "react-redux";
import { createNewBlog } from "../../api/blogService";
import { useNavigate } from "react-router-dom";

const NewBlogForm = () => {
  const navigate = useNavigate();
  const categories = useSelector((state) => state.category.categories);
  const [blog_title, setBlogTitle] = useState("");
  const [blog_description, setBlogDescription] = useState("");
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const authToken = localStorage.getItem("authToken");
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (blog_title === "" || blog_description === "" || category === null) {
      alert("Enter all the required fields.");
    } else {
      setLoading(true);
      try {
        const blogs = await createNewBlog(
          authToken,
          blog_title,
          blog_description,
          category
        );
        if (blogs) {
          console.log(blogs);
          setLoading(false);
          //   dispatch(addNewBlog(blogs));
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
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
        onChange={(ev) => setBlogTitle(ev.target.value)}
        placeholder="Title"
      />
      <textarea
        required
        rows="10"
        value={blog_description}
        onChange={(ev) => setBlogDescription(ev.target.value)}
        className="md:py-4 md:px-2 text-black py-3 px-2"
        placeholder="Description"
      />
      <select
        className="text-black md:px-2 md:py-4 py-3 px-2"
        onChange={(ev) => setCategory(ev.target.value)}
      >
        <option>Select a category</option>
        {categories.map((category) => (
          <option className="md:px-2" key={category.id} value={category.id}>
            {category.category_name[0].toUpperCase() +
              category.category_name.slice(1)}
          </option>
        ))}
      </select>
      <p>{category}</p>
      <button type="submit" className="bg-blue-500 md:py-4 text-black py-3">
        {loading ? "Loading..." : "Post"}
      </button>
    </form>
  );
};

export default NewBlogForm;
