import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (user && user.uid) {
    return children;
  }
  return navigate("/login", { replace: true });
};

export default PrivateRoute;
