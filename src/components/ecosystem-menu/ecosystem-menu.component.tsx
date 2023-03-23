import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import EcosystemMenuItem from "../ecosystem-menu-item/ecosystem-menu-item.component";
import "./ecosystem-menu.styles.scss";

function EcosystemMenu() {
  const location = useLocation();
  const ecosystem_data = useSelector(
    (state: any) => state.ecosystem.ecosystem_data
  );
  return (
    <div className="ecosystem-menu">
      {ecosystem_data.map((eco: any) => (
        <EcosystemMenuItem
          active={location.pathname === `/massa2/${eco.slug}`}
          lien={`massa2/${eco.slug}`}
        >
          {eco.title}
        </EcosystemMenuItem>
      ))}
    </div>
  );
}

export default EcosystemMenu;
