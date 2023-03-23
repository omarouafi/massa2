import React, { useEffect, useRef, useState } from "react";
import DiscordIcon from "../../icons/discord-icon/github-icon.component";
import GithubIcon from "../../icons/github-icon/github-icon.component";
import MenuBurger from "../menu-burger/menu-burger.component";
import TwitterIcon from "../../icons/twitter-icon/twitter-icon.component";
import "./menu.styles.scss";
import Btn from "../btn/btn.component";

const Menu = () => {
  const [isOpened, setIsOpened] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      console.log(menuRef.current);
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpened(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
  }, [menuRef]);

  return (
    <div ref={menuRef} className="menu">
      <div>
        <MenuBurger
          isOpened={isOpened}
          onClick={() => setIsOpened(!isOpened)}
        />
      </div>
      {isOpened && (
        <div className="menu-list">
          <div className="menu-list-item">
            <a className="menu-list-item-link" href="#">
              ABOUT MASSA
            </a>
          </div>
          <div className="menu-list-item">
            <a className="menu-list-item-link" href="#">
              TESTNET
            </a>
          </div>
          <div className="menu-list-item">
            <a className="menu-list-item-link" href="#">
              COMMUNITY
            </a>
          </div>
          <div className="menu-list-item">
            <a className="menu-list-item-link" href="#">
              MORE
            </a>
          </div>

          <div className="menu-list-item">
            <Btn>Explorer</Btn>
          </div>
          <div className="menu-list-footer">
            <a href="" className="menu-list-footer-link">
              <GithubIcon />
            </a>
            <a href="" className="menu-list-footer-link">
              <TwitterIcon />
            </a>
            <a href="" className="menu-list-footer-link">
              <DiscordIcon />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
