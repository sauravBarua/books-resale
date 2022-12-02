import React from "react";
import NavbarContainer from "../../components/navbar/NavbarContainer";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <NavbarContainer></NavbarContainer>
      <div className="header">
        <h3>Millions of classified ads and as many opportunities to have joy.</h3>
      </div>
    </div>
  );
};

export default Header;
