import React from "react";
import "./menu-burger.styles.scss";

const MenuBurger = (props: any) => {
  return (
    <div
      className={`menu-icon ${props.isOpened ? "menu-icon-active" : ""} `}
      {...props}
    >
      <div className="menu-icon-track menu-icon-track-1"></div>
      <div className="menu-icon-track menu-icon-track-2"></div>
      <div className="menu-icon-track menu-icon-track-3"></div>
    </div>
  );
};

export default MenuBurger;
