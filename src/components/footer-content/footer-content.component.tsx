import React from "react";
import "./footer-content.styles.scss";
import FooterMenu from "../footer-menu/footer-menu.component";
import { useSelector } from "react-redux";
import Arrow from "../../icons/arrow/arrow-icon.component";

function FooterContent() {
  const footer_data = useSelector((state: any) => state.footer.footer_data);

  return (
    <div className="footer-content">
      <div className="footer-menu-container">
        {footer_data.map((menu: any) => (
          <FooterMenu menu={menu} />
        ))}
      </div>
      <div className="footer-news-letter">
        <h2>
          <span>Subscribe</span>
          &nbsp; to receive Massa's &nbsp;
          <span>latest updates</span>
        </h2>
        <form className="footer-news-letter-form">
          <div className="footer-news-letter-mail-field">
            <input
              type="email"
              placeholder="Type your mail here"
              className="footer-news-letter-mail-input"
            />
            <button className="footer-news-letter-submit" type="submit">
              <Arrow />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FooterContent;
