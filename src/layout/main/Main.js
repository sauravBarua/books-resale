import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";

import "./Main.css";

const Main = () => {
  return (
    <div>
      <div className="mainHeader">
        <Header></Header>
      </div>
      <div className="mainBody">
        <Container>
          <Outlet></Outlet>
        </Container>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
