import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const { category } = location.state;
  console.log(category);

  useEffect(() => {
    fetch(`http://localhost:5000/categories?category=${category}`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [category?.categories]);
  return (
    <div>
      <h1>Category page: {console.log(categories)} </h1>{" "}
      {categories.map((category) => console.log(category.category))}
    </div>
  );
};

export default Category;
