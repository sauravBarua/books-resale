import React from "react";
import { Card } from "react-bootstrap";

const AdsCards = ({ ad }) => {
  const { img, title } = ad;
  return (
    <Card style={{ width: "5rem", flex: "33.33%" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

export default AdsCards;
