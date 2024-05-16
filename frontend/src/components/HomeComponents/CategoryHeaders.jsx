import CategoryCard from "./CategoryCard";

const CategoryHeaders = () => {
  const categoryData = [
    {
      id: 1,
      category_name: "travel",
    },
    {
      id: 2,
      category_name: "space",
    },
    {
      id: 3,
      category_name: "entertainment",
    },
    {
      id: 4,
      category_name: "finance",
    },
    {
      id: 5,
      category_name: "education",
    },
    {
        id: 6,
        category_name: "life style",
      },
  ];
  return (
    <div className="md:px-4 md:grid md:grid-cols-5 md:gap-8 md:my-4 px-4 grid grid-cols-3 gap-4 text-sm">
      {categoryData.map((item) => (
        <CategoryCard key={item.id} category_name={item.category_name} />
      ))}
    </div>
  );
};

export default CategoryHeaders;
