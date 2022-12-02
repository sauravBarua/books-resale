import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdsCards = ({ ad }) => {
  const { img, title } = ad;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/categorypage");
  };
  return (
    <div style={{ margin: "10px" }}>
      <Card
        style={{
          width: "300px",
          height: "470px",
          cursor: "pointer",
        }}
        onClick={handleNavigate}
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
