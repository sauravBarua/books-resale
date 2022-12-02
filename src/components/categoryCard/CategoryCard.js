import React, { useState } from "react";
import { Card } from "react-bootstrap";
import CategoryModal from "../categoryModal/CategoryModal";

const CategoryCard = ({ data }) => {
  const { img, title, price, condition, mobile, location, category, desc } =
    data;

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div style={{ marginTop: "25px" }}>
      <CategoryModal
        data={data}
        show={show}
        handleClose={handleClose}
      ></CategoryModal>
      <Card
        style={{
          width: "359px",
          height: "690px",
          margin: "10px",
          position: "relative",
        }}
      >
        <Card.Body>
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

          <Card.Title> {title} </Card.Title>
          <Card.Text> Price: $ {price} </Card.Text>
          <Card.Text> Condition: {condition} </Card.Text>
          <Card.Text> Location: {location} </Card.Text>
          <Card.Text>Mobile: {mobile} </Card.Text>
          <Card.Text> Category: {category} </Card.Text>
          <button
            onClick={() => {
              handleShow();
            }}
            className="btn btn-primary"
          >
            Book now
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CategoryCard;
