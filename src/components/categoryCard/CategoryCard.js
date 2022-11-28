import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

const CategoryCard = ({ data }) => {
  const { img, title, price, condition, mobile, location, category, desc } =
    data;
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <h1>Category {category} books </h1>
      <Card style={{ width: "22rem", margin: "10px" }}>
        <Card.Body>
          <Card.Img variant="top" src={img} />

          <Card.Title> Seller's name: {} </Card.Title>

          <Card.Title> {title} </Card.Title>
          <Card.Title> Price: $ {price} </Card.Title>
          <Card.Title> Condition: {condition} </Card.Title>
          <Card.Title> Location: {location} </Card.Title>

          <Card.Title>Mobile: {mobile} </Card.Title>
          <Card.Title> Category: {category} </Card.Title>

          <Card.Text>{desc}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Book now
          </Button>
        </Card.Body>
      </Card>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default CategoryCard;
