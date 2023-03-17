import React from "react";
import "./ecosystem-detail-card.styles.scss";

interface EcosystemDetailCardProps {
  title: string;
  sub: string;
  text: string;
  icon: string;
}

function EcosystemDetailCard({
  title,
  sub,
  text,
  icon,
}: EcosystemDetailCardProps) {
  return (
    <div className="ecosystem-detail-card">
      <img src={icon} alt="" className="ecosystem-detail-card-logo" />
      <div className="ecosystem-detail-card-content">
        <div className="ecosystem-detail-card-title">{title}</div>
        <div className="ecosystem-detail-card-link">{sub}</div>
        <div className="ecosystem-detail-card-description">{text}</div>
      </div>
    </div>
  );
}

export default EcosystemDetailCard;
