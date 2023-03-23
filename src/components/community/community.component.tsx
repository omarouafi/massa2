import React from "react";
import DiscordIcon from "../../icons/discord-icon/github-icon.component";
import LinkedInIcon from "../../icons/linkedin-icon/linkedin-icon.component";
import MediumIcon from "../../icons/medium-icon/medium-icon.component";
import RedditIcon from "../../icons/reddit-icon/reddit-icon.component";
import TelegramIcon from "../../icons/telegram-icon/telegram-icon.component";
import TwitterIcon from "../../icons/twitter-icon/twitter-icon.component";
import YoutubeIcon from "../../icons/youtube-icon/youtube-icon.component";
import Btn from "../btn/btn.component";
import CommunityCard from "../community-card/community-card.component";
import "./community.styles.scss";

function Community() {
  return (
    <div className="community-container">
      <h3 className="community-title">
        Join our fast growing <b>Community</b>!
      </h3>
      <div className="community-list">
        <CommunityCard
          title="Discord"
          label="Join Now"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        >
          <DiscordIcon />
        </CommunityCard>
        <CommunityCard
          title="Twitter"
          label="Follow Us"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        >
          <TwitterIcon />
        </CommunityCard>
        <CommunityCard
          title="Medium"
          label="Learn More"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        >
          <MediumIcon />
        </CommunityCard>
        <CommunityCard
          title="Telegram"
          label="Get In Touch"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        >
          <TelegramIcon />
        </CommunityCard>
      </div>
    </div>
  );
}

export default Community;
