import React from "react";
import "./ecosystem-detail.styles.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import EcosystemDetailCard from "../ecosystem-detail-card/ecosystem-detail-card.component";
import { motion } from "framer-motion";
import variants from "../../animations/animation";

function EcosystemDetail() {
  const { slug } = useParams();
  let ecosystem_data = useSelector(
    (state: any) => state.ecosystem.ecosystem_data
  );
  ecosystem_data = ecosystem_data.find((eco: any) => slug === eco.slug);

  return (
    <motion.div
      key={slug}
      variants={variants}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      <div className="ecosystem-detail-description">
        {ecosystem_data.description}
      </div>
      <div className="ecosystem-detail-container">
        {ecosystem_data?.cards.map((card: any, idx: number) => (
          <EcosystemDetailCard key={idx} {...card} />
        ))}
      </div>
    </motion.div>
  );
}

export default EcosystemDetail;
