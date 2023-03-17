import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./ecosystem-menu-item.styles.scss";

interface EcosystemMenuItemProps {
  children: ReactNode;
  lien?: string;
  active?: boolean;
}

function EcosystemMenuItem({
  children,
  lien,
  active = false,
}: EcosystemMenuItemProps) {
  return (
    <Link
      to={`/${lien}`}
      className={`ecosystem-menu-item ${
        active ? "ecosystem-menu-item-active" : ""
      } `}
    >
      {children}
    </Link>
  );
}

export default EcosystemMenuItem;
