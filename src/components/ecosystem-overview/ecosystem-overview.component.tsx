import React from "react";
import { useSelector } from "react-redux";
import Animation from "../../animations/animation";
import AppCard from "../app-card/app-card.component";
import MainCard from "../main-card/main-card.component";
import "./ecosystem-overview.styles.scss";
import { motion } from "framer-motion";
import variants from "../../animations/animation";

const EcosystemOverview = () => {
  // const ecosystem_data = useSelector(
  //   (state: any) => state.ecosystem.ecosystem_data
  // );
  return (
    <motion.div
      variants={variants}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      <MainCard />
    </motion.div>
  );
};

export default EcosystemOverview;
