import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Table } from "react-bootstrap";

const Buyer = () => {
  const { data: users = [],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://roducts-resale-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete!");
    if (proceed) {
      fetch(`https://roducts-resale-server.vercel.app/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch()
        });
    }
  };
  return (
    <div>
      <h1>Buyer</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(
            (user, i) =>
              user.role === "buyer" && (
                <tr key={user._id}>
                  <td> {i} </td>
                  <td> {user.name} </td>
                  <td> {user.email} </td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </Table>

      {/* {users.map(
        (user, i) =>
          user.role === "buyer" && (
            <div key={i}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> {i-1} </td>
                    <td> {user.name} </td>
                    <td> {user.email} </td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          )
      )} */}
    </div>
  );
};

export default Buyer;
