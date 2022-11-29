import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Table } from "react-bootstrap";

const Buyer = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1>Buyer</h1>

      {users.map(
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
      )}
    </div>
  );
};

export default Buyer;
