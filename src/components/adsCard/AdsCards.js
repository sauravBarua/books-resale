import React from "react";
import { Card } from "react-bootstrap";

const AdsCards = ({ ad }) => {
  const { img, title } = ad;
  return (
  <div style={{margin: "10px"}}>
      <Card
      style={{
        width: "300px",
        height: "470px",
      }}
    >
      <Card.Img
        style={{
          width: "300px",
          height: "360px",
          textAlign: "center",
          padding: "15px",
        }}
        variant="top"
        src={img}
      />
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  </div>
  );
};

export default AdsCards;
