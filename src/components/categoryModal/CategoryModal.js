import React, { useContext, useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";

const CategoryModal = ({ data, show, handleClose }) => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const booking = { title,email, price, phone, location };
    console.log(booking);
    fetch("https://roducts-resale-server.vercel.app/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const newbookings = [...bookings, data];
          setBookings(newbookings);
          alert("Add newbookings");
        })
        .catch((error) => {
          console.error(error);
        });
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleBooking}>
          <InputGroup className="mb-3">
            <Form.Control
              name="title"
              type="text"
              defaultValue={data.title}
              readOnly
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              name="price"
              type="text"
              defaultValue={data.price}
              readOnly
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              name="email"
              type="email"
              defaultValue={user.email}
              readOnly
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              name="phone"
              type="text"
              placeholder="Enter your phone number"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              name="location"
              type="text"
              placeholder="Enter your location"
            />
          </InputGroup>
          <Modal.Footer>
            <Button onClick={handleClose} variant="secondary">
              Close
            </Button>

            <Button onClick={handleClose} variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CategoryModal;
