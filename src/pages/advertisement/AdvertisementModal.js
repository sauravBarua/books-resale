import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

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

    // fetch("http://localhost:5000/advertisements", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(ad),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     const newAd = [...ads, data];
    //     setads(newAd);
    //     alert("Add Ad");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleAd}>
          <Form.Group className="mb-3 ">
            <Form.Control name="img" type="text" readOnly value={data.img} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              name="title"
              type="text"
              readOnly
              value={data.title}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control name="id" type="text" readOnly value={id} />
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AdvertisementModal;
