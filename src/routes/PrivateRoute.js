import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (user && user.uid) {
    return children;
  }
  return navigate("/login", { replace: true });
};

export default PrivateRoute;
