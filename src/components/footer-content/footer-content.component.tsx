import React from "react";
import "./footer-content.styles.scss";
import FooterMenu from "../footer-menu/footer-menu.component";
import { useSelector } from "react-redux";
import Arrow from "../../icons/arrow/arrow-icon.component";
import FooterHeader from "../footer-header/footer-header.component";

function FooterContent() {
  const footer_data = useSelector((state: any) => state.footer.footer_data);

  return (
    <div className="footer-content">
      <FooterHeader />
      <div className="footer-menu-container">
        {footer_data.map((menu: any) => (
          <FooterMenu menu={menu} />
        ))}
      </div>
    </div>
  );
}

export default FooterContent;
