import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/users?email=${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, [user?.email]);

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      {user?.email &&
        categories.map((category, i) => <p> {category.title} </p>)}
    </div>
  );
};

export default MyProducts;
