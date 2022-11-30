import React, { useState } from "react";
import { CardGroup } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CategoriesCard from "../../components/categoriesCard/CategoriesCard";

const Advertised = ({ products }) => {
  const categories = useLoaderData();

  console.log(categories);

  return (
    <div>
      {/* <CardGroup>
        {categories.map((category) => (
          <CategoriesCard
            key={category.id}
            category={category}
          ></CategoriesCard>
        ))}
      </CardGroup> */}
    </div>
  );
};

export default Advertised;
