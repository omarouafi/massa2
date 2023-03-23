import React from "react";
import "./main-card.styles.scss";
import Btn from "../btn/btn.component";
import EcosystemMenu from "../ecosystem-menu/ecosystem-menu.component";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import EcosystemDetail from "../ecosystem-detail/ecosystem-detail.component";

function MainCard() {
  return (
    <div className="main-card">
      <div className="main-card-overview">
        <div className="main-card-icon">
          <img
            src="https://massa.net/_nuxt/img/massa_love.e9f32fa.webp"
            alt=""
          />
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
      <EcosystemMenu />
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            key="ecosystem-detail"
            path="/massa/:slug"
            Component={EcosystemDetail}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default MainCard;
