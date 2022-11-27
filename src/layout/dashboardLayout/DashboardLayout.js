import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavbarContainer from "../../components/navbar/NavbarContainer";
import Footer from "../../shared/footer/Footer";

const DashboardLayout = () => {
  return (
    <>
      <div>
        <NavbarContainer></NavbarContainer>

        <div className="position-relative">
          <div className="vh-100 col-lg-2 col-md-3 col-sm-4 col-xs-12 position-absolute top-0 start-0 shadow p-3 bg-body">
            {/* <AppDrawer /> */}
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </div>
        </div>

        <Container fluid>
          <Row className="flex-xl-nowrap">
            <Col xs={12} sm={4} md={3} lg={2} />
            <Col xs={12} sm={8} md={9} lg={10}>
              {/* <Product /> */}
              <Outlet></Outlet>
            </Col>
          </Row>
        </Container>

        <Footer></Footer>
      </div>
    </>
  );
};

export default DashboardLayout;
