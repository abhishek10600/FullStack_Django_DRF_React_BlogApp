import { CiSquarePlus } from "react-icons/ci";

const CreatePostButton = () => {
  return (
    <button>
      <CiSquarePlus
        className="md:hover:scale-125 ease-in duration-150"
        size={50}
      />
    </button>
  );
};

export default CreatePostButton;
