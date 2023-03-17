import React from "react";
import "./app-card.styles.scss";
import { useNavigate } from "react-router-dom";

interface AppCardProps {
  title: string;
  slug: string;
  description: string;
}

function AppCard({ title, slug, description }: AppCardProps) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/${slug}`)}>
      <div className="app-card">
        <div className="app-card-title">{title}</div>
        <div className="app-card-description">{description}</div>
      </div>
    </div>
  );
}

export default AppCard;
