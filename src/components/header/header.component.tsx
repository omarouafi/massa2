import React from "react";
import Logo from "../logo/logo.component";
import Menu from "../menu/menu.component";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Logo hover />
      <Menu />
    </div>
  );
};

export default Header;
