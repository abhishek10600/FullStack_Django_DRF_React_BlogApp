const CategoryCard = ({ category_name }) => {
  return (
    <div className="bg-blue-300 flex justify-center items-center rounded-2xl">
      <h1 className="text-black md:text-xl">
        {category_name[0].toUpperCase() + category_name.slice(1)}
      </h1>
    </div>
  );
};

export default CategoryCard;
