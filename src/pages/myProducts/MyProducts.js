import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";
import AdvertisementModal from "../advertisement/AdvertisementModal";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [id, setId] = useState(null);
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");

  const { data: categories = [], refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://roducts-resale-server.vercel.app/categories");
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete!");
    if (proceed) {
      fetch(`https://roducts-resale-server.vercel.app/categories/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch();
        });
    }
  };

  useEffect(() => {
    axios.get(`https://roducts-resale-server.vercel.app/categories/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  const handleAd = (id) => {
    console.log(id);
    setId(id);
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <AdvertisementModal
        data={data}
        id={id}
        show={show}
        handleClose={handleClose}
      ></AdvertisementModal>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Advertised</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user?.email &&
            categories.map((category, i) => (
              <tr key={category.id}>
                <td> {i + 1} </td>
                <td> {category.title} </td>
                <td>
                  <button
                    onClick={() => {
                      handleShow();
                      handleAd(category._id);
                    }}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(category._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyProducts;
