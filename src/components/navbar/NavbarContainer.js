import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authProvider/AuthProvider";
import "./NavbarContainer.css";

const NavbarContainer = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`https://roducts-resale-server.vercel.app/users`);
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
    <Navbar
      style={{ boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)" }}
      bg="light"
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          style={{ color: "#C0562A", fontWeight: "bold", fontSize: "2.5em" }}
          href="/"
        >
          Books’n’Things
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="link" style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
            <Link
              className="link"
              style={{ textDecoration: "none" }}
              to="/categorypage"
            >
              Category
            </Link>
            <Link
              className="link"
              style={{ textDecoration: "none" }}
              to="/blog"
            >
              Blog
            </Link>
          </Nav>
          <Nav className="me-auto">
            {user?.uid ? (
              <>
                {users.map((data) =>
                  data.email === user.email && data.role === "admin" ? (
                    <Link
                      className="link"
                      style={{ textDecoration: "none" }}
                      to="/dashboard"
                    >
                      Dashbord
                    </Link>
                  ) : data.email === user.email && data.role === "seller" ? (
                    <>
                      <Link
                        className="link"
                        style={{ textDecoration: "none" }}
                        to="/product"
                      >
                        Add product
                      </Link>
                      <Link
                        className="link"
                        style={{ textDecoration: "none" }}
                        to="/myproducts"
                      >
                        My Products
                      </Link>
                    </>
                  ) : data.email === user.email && data.role === "buyer" ? (
                    <>
                      <Link
                        className="link"
                        style={{ textDecoration: "none" }}
                        to="/myorders"
                      >
                        My orders
                      </Link>
                    </>
                  ) : (
                    <></>
                  )
                )}
                <Link
                  className="link"
                  style={{ textDecoration: "none" }}
                  onClick={handleLogout}
                >
                  Log out
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="link"
                  style={{ textDecoration: "none" }}
                  to="/login"
                >
                  Login
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarContainer;
