import React from "react";
import "./footer-header.styles.scss";
import DiscordIcon from "../../icons/discord-icon/github-icon.component";
import GithubIcon from "../../icons/github-icon/github-icon.component";
import Logo from "../logo/logo.component";
import TwitterIcon from "../../icons/twitter-icon/twitter-icon.component";
import MediumIcon from "../../icons/medium-icon/medium-icon.component";
import TelegramIcon from "../../icons/telegram-icon/telegram-icon.component";
import RedditIcon from "../../icons/reddit-icon/reddit-icon.component";
import YoutubeIcon from "../../icons/youtube-icon/youtube-icon.component";
import LinkedInIcon from "../../icons/linkedin-icon/linkedin-icon.component";

function FooterHeader() {
  return (
    <div className="footer-header">
      <div className="footer-brand-identity">
        <Logo />
        <div className="footer-description">
          Massa is a truly decentralized blockchain controlled by thousands of
          people. With the breakthrough multithreaded technology, we're set for
          mass adoption.
        </div>
      </div>
      <div className="social-icons">
        <a href="">
          <MediumIcon />
        </a>
        <a href="">
          <GithubIcon />
        </a>
        <a href="">
          <TwitterIcon />
        </a>
        <a href="">
          <DiscordIcon />
        </a>
        <a href="">
          <TelegramIcon />
        </a>
        <a href="">
          <RedditIcon />
        </a>
        <a href="">
          <YoutubeIcon />
        </a>
        <a href="">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}

export default FooterHeader;
