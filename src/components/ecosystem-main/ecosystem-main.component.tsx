import React from "react";
import EcosystemMenu from "../ecosystem-menu/ecosystem-menu.component";
import "./ecosystem-main.styles.scss";
import { Route, Routes } from "react-router-dom";
import EcosystemOverview from "../ecosystem-overview/ecosystem-overview.component";
import { useSelector } from "react-redux";
import EcosystemDetail from "../ecosystem-detail/ecosystem-detail.component";
import { motion, AnimatePresence } from "framer-motion";

const EcosystemMain = () => {
  const ecosystem_data = useSelector(
    (state: any) => state.ecosystem.ecosystem_data
  );

  return (
    <>
      <EcosystemMenu />
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            key="ecosystem-overview"
            path="/massa"
            Component={EcosystemOverview}
          />
          <Route
            key="ecosystem-detail"
            path="/massa"
            Component={EcosystemDetail}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default EcosystemMain;
