import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";

const AdvertisementModal = ({ id, show, handleClose, data }) => {
  // console.log(id);
  const [ads, setads] = useState([]);

  const handleAd = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const img = form.img.value;
    const id = form.id.value;
    const ad = { title, img, id };
    console.log(ad);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleAd}>
          {/* <input n /> */}
          <InputGroup className="mb-3">
            <Form.Control
              ame="title"
              type="text"
              defaultValue={data.title}
              readOnly
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              name="img"
              type="text"
              defaultValue={data.img}
              readOnly
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control name="id" type="text" defaultValue={id} readOnly />
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

export default AdvertisementModal;
