import React from "react";
import "../styles/Header.scss";

const Header = ({ setheader }) => {
  const esconderHeader = (e) => {
    e.preventDefault();
    setheader(true);
  };

  return (
    <header onClick={esconderHeader}>
      <div className="logo">
        <div className="gradient-box">
          <p className="logoletter">K</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
