import { ReactNode } from "react";
import { JsxElement } from "typescript";
import "./community-card.styles.scss";

interface CommunityCardProps {
  title: string;
  description: string;
  label: string;
  children: ReactNode;
}

function CommunityCard({
  title,
  description,
  label,
  children,
}: CommunityCardProps) {
  return (
    <div className="community-card-main">
      <div className="community-card">
        <div className="community-card-container">
          <div className="community-header">{title}</div>
          <div className="community-description">{description}</div>
        </div>
        <button className="community-card-cta">{label}</button>
      </div>
      <div className="community-card-icon">{children}</div>
    </div>
  );
}

export default CommunityCard;
