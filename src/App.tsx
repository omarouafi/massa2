import React, { useEffect } from "react";
import "./App.scss";
import Community from "./components/community/community.component";
import Cta from "./components/cta/cta.component";
import EcosystemMain from "./components/ecosystem-main/ecosystem-main.component";
import Footer from "./components/footer/footer-component";
import Header from "./components/header/header.component";
import NewsLetter from "./components/news-letter/news-letter.component";
import ScrollToTopButton from "./components/scroll-btn/scroll-btn.component";
import ScrollBtn from "./components/scroll-btn/scroll-btn.component";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();
  let ecosystem_data = useSelector(
    (state: any) => state.ecosystem.ecosystem_data
  );
  useEffect(() => {
    navigate(`/massa2/${ecosystem_data[0].slug}`);
  }, [ecosystem_data]);

  return (
    <div className="app-wrapper">
      <Header />
      <div className="main-section">
        <h2 className="main-title">
          Discover <br /> our <b>Ecosystem</b>
        </h2>
      </div>
      <EcosystemMain />
      <Cta />
      <Community />
      <NewsLetter />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
