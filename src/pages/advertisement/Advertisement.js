import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Advertisement = ({ id, show, handleClose }) => {
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:5000/categories/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [id]);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> </Modal.Title>
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
    </>
  );
};

export default Advertisement;
