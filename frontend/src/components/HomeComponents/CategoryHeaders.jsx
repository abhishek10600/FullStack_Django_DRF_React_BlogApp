import { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../store/categorySlice";

const CategoryHeaders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const categoryData = useSelector((state) => state.category.categories);
  const categoryLoading = useSelector((state) => state.category.isLoading);
  return (
    <div className="md:px-4 md:grid md:grid-cols-5 md:gap-8 md:my-4 px-4 grid grid-cols-3 gap-4 text-sm">
      {!categoryLoading &&
        categoryData?.map((item) => (
          <CategoryCard key={item.id} category_name={item.category_name} />
        ))}
      {categoryLoading && (
        <div>
          <h1 className="text-white">Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default CategoryHeaders;
