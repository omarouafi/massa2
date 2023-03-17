import React from "react";
import "./main-card.styles.scss";
import Btn from "../btn/btn.component";

function MainCard() {
  return (
    <div className="main-card">
      <div className="main-card-icon">
        <img src="https://massa.net/_nuxt/img/massa_love.e9f32fa.webp" alt="" />
      </div>
      <div className="main-card-content">
        <h3 className="main-card-title">Compatible with Massa Network</h3>
        <p className="main-card-desc">
          An overview of the apps and integrations in the Massa ecosystem.
        </p>
        <div className="main-card-cta">
          <Btn>Add your app</Btn>
          <Btn type="outlined">Apply for a grant</Btn>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
