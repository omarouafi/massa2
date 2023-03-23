import React from "react";
import Arrow from "../../icons/arrow/arrow-icon.component";
import "./news-letter.styles.scss";

function NewsLetter() {
  return (
    <div className="news-letter-container">
      <h3 className="news-letter-header">
        Join <b>Massa's</b>
        <br />
        <b>
          News Letter <br />
        </b>
        for the latest updates!
      </h3>
      <div className="news-letter-field">
        <form className="news-letter-form">
          <div className="news-letter-mail-field">
            <input
              type="email"
              placeholder="Type your mail here"
              className="news-letter-mail-input"
            />
            <button className="news-letter-submit" type="submit">
              <Arrow />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;
