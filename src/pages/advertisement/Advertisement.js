import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

const Advertisement = ({ id, show, handleClose }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/categories/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  const handleAd = () => {};
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {/* <img
            src={data.img}
            alt=""
            style={{
              width: "300px",
              height: "360px",
              textAlign: "center",
              padding: "15px",
            }}
          /> */}

        <Modal.Body>
          <input readOnly value={data.img} />
          <input readOnly value={data.title} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              handleAd();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Advertisement;
