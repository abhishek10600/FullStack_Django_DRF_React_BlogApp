import { useParams } from "react-router-dom";
import EditBlogForm from "../components/EditBlogComponents/EditBlogForm";


const EditBlogPage = () => {
  const { id } = useParams();
  return (
    <div className="md:max-w-[1240px] md:mx-auto text-white">
      <h1 className="md:text-3xl text-center md:my-8 font-bold text-2xl my-6">
        Edit Blog
      </h1>
      <EditBlogForm blogId={id} />
    </div>
  );
};

export default EditBlogPage;
