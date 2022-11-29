import React from "react";
import CategorySection from "../../components/categorySection/CategorySection";

const CategoryPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px"
      }}
    >
      <CategorySection category={"computer"} />
      <CategorySection category={"comic"} />
      <CategorySection category={"music"} />
    </div>
  );
};

export default CategoryPage;
