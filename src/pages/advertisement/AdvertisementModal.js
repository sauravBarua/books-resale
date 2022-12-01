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
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleAd} className="grid grid-cols-1 gap-3 mt-10">
          <input
            type="text"
            disabled
            // value={date}
            className="input w-full input-bordered "
          />
          {/* <select name="slot" className="select select-bordered w-full">
            {slots.map((slot, i) => (
              <option value={slot} key={i}>
                {slot}
              </option>
            ))}
          </select> */}
          <input
            name="title"
            type="text"
            defaultValue={data.title}
            disabled
            placeholder="Your Name"
          />
          <input
            name="img"
            type="email"
            defaultValue={data.img}
            disabled
            className="input w-full input-bordered"
          />
          <input name="id" type="text" defaultValue={id} />
          <br />
          <input
            type="submit"
            value="Submit"
          />
        </form>
      </Modal>
    </>
  );
};

export default AdvertisementModal;
