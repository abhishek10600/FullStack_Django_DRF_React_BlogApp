import BlogCard from "../components/HomeComponents/BlogCard";
import BlogHeader from "../components/HomeComponents/BlogHeader";
import CategoryHeaders from "../components/HomeComponents/CategoryHeaders";
import CreatePostButton from "../components/HomeComponents/CreatePostButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const postData = [
    {
      id: 1,
      author: "abhishek10600",
      blog_title: "How to travel the world?",
      blog_description:
        "Travelling is an activity that will give you a lot experience.",
      is_public: true,
      created_at: "2024-05-13T15:12:02.924987Z",
      updated_at: "2024-05-13T15:17:58.273044Z",
      category: 4,
    },
    {
      id: 2,
      author: "abhishek10600",
      blog_title: "How to travel the world?",
      blog_description:
        "Travelling is an activity that will give you a lot experience.",
      is_public: true,
      created_at: "2024-05-14T07:27:05.873222Z",
      updated_at: "2024-05-14T07:27:05.873261Z",
      category: 4,
    },
    {
      id: 3,
      author: "abhishek10600",
      blog_title: "How to travel the world?",
      blog_description:
        "Travelling is an activity that will give you a lot experience.",
      is_public: true,
      created_at: "2024-05-14T07:27:05.873222Z",
      updated_at: "2024-05-14T07:27:05.873261Z",
      category: 4,
    },
    {
      id: 4,
      author: "abhishek10600",
      blog_title: "How to travel the world?",
      blog_description:
        "Travelling is an activity that will give you a lot experience.",
      is_public: true,
      created_at: "2024-05-14T07:27:05.873222Z",
      updated_at: "2024-05-14T07:27:05.873261Z",
      category: 4,
    },
    {
      id: 5,
      author: "abhishek10600",
      blog_title: "How to travel the world?",
      blog_description:
        "Travelling is an activity that will give you a lot experience.",
      is_public: true,
      created_at: "2024-05-14T07:27:05.873222Z",
      updated_at: "2024-05-14T07:27:05.873261Z",
      category: 4,
    },
  ];
  return (
    <div className="text-white md:max-w-[1240px] md:mx-auto">
      <div className="home-categories">
        <CategoryHeaders />
      </div>
      <div className="blogs">
        <div className="flex my-10 px-4 justify-between items-center">
          <BlogHeader />
          {authStatus && <CreatePostButton />}
          {!authStatus && (
            <Link
              to="/login"
              className="bg-red-500 md:text-xl md:px-4 md:py-2 md:rounded-xl text-sm py-1 px-2 rounded-lg"
            >
              Login To Create Your Blogs
            </Link>
          )}
        </div>
        <div className="blog-container flex flex-col gap-10 px-4 my-4">
          {postData.map((item) => (
            <BlogCard
              key={item.id}
              id={item.id}
              author={item.author}
              blog_title={item.blog_title}
              blog_description={item.blog_description}
              created_at={item.created_at}
              category_id={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
