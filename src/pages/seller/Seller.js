import { useQuery } from "@tanstack/react-query";
import React from "react";

const Seller = () => {
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
      <h1>seller</h1>
      {users.map(
        (user, i) =>
          user.role === "seller" && <p key={user.id}> {user.name} </p>
      )}
    </div>
  );
};

export default Seller;
