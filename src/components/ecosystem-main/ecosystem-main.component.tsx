import React from "react";
import EcosystemMenu from "../ecosystem-menu/ecosystem-menu.component";
import "./ecosystem-main.styles.scss";
import { Route, Routes } from "react-router-dom";
import EcosystemOverview from "../ecosystem-overview/ecosystem-overview.component";
import { useSelector } from "react-redux";
import EcosystemDetail from "../ecosystem-detail/ecosystem-detail.component";
import { motion, AnimatePresence } from "framer-motion";

const EcosystemMain = () => {
  return (
    <>
      <EcosystemOverview />
    </>
  );
};

export default EcosystemMain;
