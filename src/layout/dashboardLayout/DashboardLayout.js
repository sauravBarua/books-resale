import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import NavbarContainer from "../../components/navbar/NavbarContainer";

const DashboardLayout = () => {
  return (
    <>
      <div>
        <NavbarContainer></NavbarContainer>

        <div className="position-relative">
          <div className="vh-100 col-lg-2 col-md-3 col-sm-4 col-xs-12 position-absolute top-0 start-0 shadow p-3 bg-body">
            {/* <AppDrawer /> */}
            <ul>
              <li>
                <Link style={{ textDecoration: "none" }} to="/dashboard/buyers">
                  Buyers
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/dashboard/sellers"
                >
                  Sellers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Container fluid>
          <Row className="flex-xl-nowrap">
            <Col xs={12} sm={4} md={3} lg={2} />
            <Col xs={12} sm={8} md={9} lg={10}>
              <Outlet></Outlet>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DashboardLayout;
