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
    const ad_id = form.id.value;
    const ad = { title, img, ad_id };
    console.log(ad);

    fetch("http://localhost:5000/ads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ad),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newAd = [...ads, data];
        setads(newAd);
        alert("Add Ad");
      })
      .catch((error) => {
        console.error(error);
      });
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
