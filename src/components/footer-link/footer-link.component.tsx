import React from "react";
import "./footer-link.styles.scss";

interface FooterLinkProps {
  link: string;
  label: string;
  arrow?: boolean;
}

function FooterLink({ link, label, arrow = false }: FooterLinkProps) {
  return (
    <div className="footer-link">
      <a href={link}>
        <span>{label}</span>
        {arrow && <span className="footer-link-arrow">↗</span>}
      </a>
    </div>
  );
}

export default FooterLink;
