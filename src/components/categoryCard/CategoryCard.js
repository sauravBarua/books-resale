import React, { useContext, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";

const CategoryCard = ({ data }) => {
  const { img, title, price, condition, mobile, location, category, desc } =
    data;

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const { user } = useContext(AuthContext);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.targer;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;
    console.log(name, email, phone, location);
  };

  return (
    <div style={{ marginTop: "25px" }}>
      <Card
        style={{
          width: "359px",
          height: "700px",
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

          <Card.Title> Seller's name: {} </Card.Title>

          <Card.Title> {title} </Card.Title>
          <Card.Title> Price: $ {price} </Card.Title>
          <Card.Title> Condition: {condition} </Card.Title>
          <Card.Title> Location: {location} </Card.Title>

          <Card.Title>Mobile: {mobile} </Card.Title>
          <Card.Title> Category: {category} </Card.Title>

          {/* <Card.Text>{desc}</Card.Text> */}
          <Button
            style={{ position: "absolute", bottom: "7px" }}
            variant="primary"
            onClick={handleShow}
          >
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
            <Form onSubmit={handleBooking}>
              <Form.Group className="mb-3 ">
                <Form.Control
                  name="name"
                  type="text"
                  readOnly
                  value={user.displayName}
                />
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Control
                  readOnly
                  name="email"
                  type="text"
                  value={user.email}
                />
              </Form.Group>
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
                  type="text"
                  placeholder="Enter meeting location"
                  required
                />
              </Form.Group>
              <Button variant="primary">Submit</Button>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default CategoryCard;
