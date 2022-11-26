import React from "react";
import CategorySection from "../../components/categorySection/CategorySection";

const CategoryPage = () => {
  return (
    <div>
      <CategorySection category={"computer"} />
      <CategorySection category={"comic"} />
      <CategorySection category={"music"} />
    </div>
  );
};

export default CategoryPage;
