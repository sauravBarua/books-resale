import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch("https://roducts-resale-server.vercel.app/bookings");
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  return (
    <div style={{ marginTop: "25px" }}>
      <h4>My orders</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Book name</th>
            <th>Price</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user?.email &&
            bookings.map((book, i) => (
              <tr key={book._id}>
                <td> {i + 1} </td>
                <td> {book.title} </td>
                <td>$ {book.price} </td>
                <td> {user.email} </td>
                <td> {book.phone} </td>
                <td> {book.location} </td>
                <td>
                  <button className="btn btn-primary">Pay</button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyOrders;
