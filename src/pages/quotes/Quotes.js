import React, { useEffect, useState } from "react";
import Quotescard from "../../components/quotesCard/Quotescard";

const Quotes = () => {
  const [track, setTrack] = useState("");

  useEffect(() => {
    let repeat;

    async function fetchData() {
      try {
        const res = await fetch("https://api.quotable.io/random");
        const json = await res.json();

        setTrack(json);

        repeat = setTimeout(fetchData, 5000); // request again after a minute
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();

    return () => {
      if (repeat) {
        clearTimeout(repeat);
      }
    };
  }, []);

  return (
    <div>
      <Quotescard track={track}></Quotescard>
    </div>
  );
};

export default Quotes;
