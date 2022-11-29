import React, { useContext, useState } from "react";
import { Button, Card, Form, InputGroup, Modal } from "react-bootstrap";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";

const CategoryCard = ({ data }) => {
  const { img, title, price, condition, mobile, location, category, desc } =
    data;
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const { user } = useContext(AuthContext);

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
          <Modal.Body>
            <Modal.Title>Price: $ {price}</Modal.Title>
            <Modal.Title>Buyer name: {user.displayName}</Modal.Title>
            <Modal.Title>Buyer name: {user.email}</Modal.Title>
            <Form>
              <Form.Group className="mb-3 ">
                <Form.Control
                  name="phone"
                  type="text"
                  placeholder="Enter Your phone number"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  name="location"
                  type="test"
                  placeholder="Enter meeting location"
                  required
                />
              </Form.Group>

              <Form.Text className="text-danger"></Form.Text>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Book now
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default CategoryCard;
