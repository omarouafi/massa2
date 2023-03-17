import React from "react";
import "./App.scss";
import Cta from "./components/cta/cta.component";
import EcosystemMain from "./components/ecosystem-main/ecosystem-main.component";
import Footer from "./components/footer/footer-component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="main-title">
        <h2>Ecosystem</h2>
      </div>
      <EcosystemMain />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
