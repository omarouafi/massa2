import React, { useEffect, useRef, useState } from "react";
import DiscordIcon from "../../icons/discord-icon/github-icon.component";
import GithubIcon from "../../icons/github-icon/github-icon.component";
import MenuBurger from "../menu-burger/menu-burger.component";
import TwitterIcon from "../../icons/twitter-icon/twitter-icon.component";
import "./menu-desktop.styles.scss";

const MenuDesktop = () => {
  return (
    <div className="menu-list-desktop">
      <div className="menu-list-desktop-item">
        <a className="menu-list-desktop-item-link" href="#">
          About
        </a>
      </div>
      <div className="menu-list-desktop-item">
        <a className="menu-list-desktop-item-link" href="#">
          Testnet
        </a>
      </div>
      <div className="menu-list-desktop-item">
        <a className="menu-list-desktop-item-link" href="#">
          Community
        </a>
      </div>
      <div className="menu-list-desktop-item">
        <a className="menu-list-desktop-item-link" href="#">
          More
        </a>
      </div>
    </div>
  );
};

export default MenuDesktop;
