import React, { useContext, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";
import CategoryModal from "../categoryModal/CategoryModal";

const CategoryCard = ({ data }) => {
  const { img, title, price, condition, mobile, location, category, desc } =
    data;

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // const { user } = useContext(AuthContext);

  // const handleBooking = (e) => {
  //   e.preventDefault();
  //   const form = e.targer;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const phone = form.phone.value;
  //   const location = form.location.value;
  //   console.log(name, email, phone, location);
  // };

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

          {/* <Card.Title> Seller's name: {} </Card.Title> */}

          <Card.Title> {title} </Card.Title>
          <Card.Text> Price: $ {price} </Card.Text>
          <Card.Text> Condition: {condition} </Card.Text>
          <Card.Text> Location: {location} </Card.Text>
          <Card.Text>Mobile: {mobile} </Card.Text>
          <Card.Text> Category: {category} </Card.Text>

          {/* <Card.Text>{desc}</Card.Text> */}
          {/* <Button
            style={{ position: "absolute", bottom: "0" }}
            variant="primary"
            onClick={handleShow}
          >
            Book now
          </Button> */}
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
