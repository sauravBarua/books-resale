import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";

const NavbarContainer = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

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
            <Link to="/">Home</Link>
            <Link to="/product">Add Product</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/categorypage">Category</Link>
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
