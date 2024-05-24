import NewBlogForm from "../components/CreateNewBlogComponents/NewBlogForm";

const CreateNewBlogPage = () => {
  return (
    <div className="md:max-w-[1240px] md:mx-auto text-white">
      <h1 className="md:text-3xl text-center md:my-8 font-bold text-2xl my-6">
        Create New Blog
      </h1>
      <NewBlogForm />
    </div>
  );
};

export default CreateNewBlogPage;
