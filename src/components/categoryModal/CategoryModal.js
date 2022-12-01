import React from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";

const CategoryModal = ({ data, show, handleClose }) => {
  console.log(data.title);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const booking = { title, price };
    console.log(booking);
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
            {/* <Form.Control name="id" type="text" defaultValue={id} readOnly /> */}
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
