import React from "react";
import Ads from "../../pages/ads/Ads";
import Quotes from "../../pages/quotes/Quotes";

const Home = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <h4>Advertisement</h4>
      <Ads></Ads>
      <Quotes></Quotes>
    </div>
  );
};

export default Home;
