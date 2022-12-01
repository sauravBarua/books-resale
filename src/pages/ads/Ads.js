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
    <div>
      <h1>ads</h1>
      {ads.map((ad) => (
        <p key={ad.id}>Ad: {ad.title} </p>
      ))}
    </div>
  );
};

export default Ads;
