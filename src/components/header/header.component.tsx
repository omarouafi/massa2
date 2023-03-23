import React, { useEffect, useState } from "react";
import Logo from "../logo/logo.component";
import MenuDesktop from "../menu-desktop/menu-desktop.component";
import Menu from "../menu/menu.component";
import "./header.styles.scss";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const screenWidth = window.innerWidth;
    setIsMobile(screenWidth < 768);
  }, []);

  return (
    <div className="header">
      <Logo hover />
      {isMobile ? (
        <Menu />
      ) : (
        <>
          <MenuDesktop />
          <div>
            <div className="menu-list-desktop-item-button">
              <a href="#" className="menu-list-desktop-item-button-link">
                Explorer
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
