import React from "react";
import NavbarContainer from "../../components/navbar/NavbarContainer";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <NavbarContainer></NavbarContainer>
      <div className="header">
        <div className="headerLink">Frame Fusion</div>
      </div>
    </div>
  );
};

export default Header;
