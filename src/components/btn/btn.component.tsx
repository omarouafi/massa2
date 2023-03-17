import React, { ReactNode } from "react";
import "./btn.styles.scss";

interface BtnProps {
  children: ReactNode;
  type?: string;
}

const Btn = ({ children, type = "primary" }: BtnProps) => {
  return <button className={`btn btn-${type}`}>{children}</button>;
};

export default Btn;
