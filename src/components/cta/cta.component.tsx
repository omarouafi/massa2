import React from "react";
import Btn from "../btn/btn.component";
import "./cta.styles.scss";

function Cta() {
  return (
    <div className="cta-container">
      <h3 className="cta-title">Build with Massa!</h3>
      <p className="cta-description">
        Participate to the growth of the ecosystem & to the Massadoption
      </p>
      <div className="cta-footer">
        <Btn>Build on mass</Btn>
        <Btn type="outlined-secondary">Add your App</Btn>
      </div>
    </div>
  );
}

export default Cta;
