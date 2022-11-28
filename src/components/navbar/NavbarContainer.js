import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";

const NavbarContainer = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((err) => console.error(err));
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Books’n’Things</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user?.uid &&
              users.map((user, i) => (
                <p key={user._id}>{user.role === "admin" && <>admin</>}</p>
              ))}
          </Nav>
          <Nav className="me-auto">
            {user?.uid ? (
              <Link
                className="link"
                style={{ textDecoration: "none" }}
                onClick={handleLogout}
              >
                Log out
              </Link>
            ) : (
              <Link
                className="link"
                style={{ textDecoration: "none" }}
                to="/login"
              >
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarContainer;
