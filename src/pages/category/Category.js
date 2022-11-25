import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState({});
  const location = useLocation();
  const { category } = location.state;

  useEffect(() => {
    fetch(`http://localhost:8000/categories?category=${category}`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [categories]);
  return (
    <div>
      <h1>Category page: {categories.length} </h1>{" "}
    </div>
  );
};

export default Category;
