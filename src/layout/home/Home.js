import React from "react";
import CategorySection from "../../components/categorySection/CategorySection";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <CategorySection category={"computer"} />
      <CategorySection category={"comic"} />
      <CategorySection category={"music"} />
     
    </div>
  );
};

export default Home;
