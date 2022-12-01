import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdsCards from "../../components/adsCard/AdsCards";

const Ads = () => {
  const { data: ads = [] } = useQuery({
    queryKey: ["ads"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/ads");
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  return (
    <div
      style={{
        display: "flex",
        margin: "10px",
        flexDirection: "row",
        flexWrap: "wrap",
        // width: "100%",
      }}
    >
      {ads.map((ad) => (
        <AdsCards key={ad.id} ad={ad}></AdsCards>
      ))}
    </div>
  );
};

export default Ads;
