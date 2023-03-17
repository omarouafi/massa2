import React from "react";
import "./logo.styles.scss";

interface LogoProps {
  hover?: boolean;
}

const Logo = ({ hover = false }: LogoProps) => {
  return (
    <div className={`logo-container ${hover ? "logo-hover" : ""}`}>
      <img src="https://massa.net/_nuxt/img/logo_massa.2e234a2.webp" alt="" />
    </div>
  );
};

export default Logo;
