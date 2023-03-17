import React from "react";
import FooterLink from "../footer-link/footer-link.component";
import "./footer-menu.styles.scss";

function FooterMenu({ menu }: any) {
  return (
    <div className="footer-menu">
      <div className="footer-menu-header">{menu.header}</div>
      <div className="footer-menu-links">
        {menu.links.map((link: any) => (
          <FooterLink {...link} />
        ))}
      </div>
    </div>
  );
}

export default FooterMenu;
