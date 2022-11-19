import React from "react";

import "./styles.css";

const BannerComponent = () => {
  return (
    <div className="banner">
      <div className="title">Trending Letters Helper Tool 🤔</div>
      <div className="web-info">
        <p>
          Made to accompany this{" "}
          <a href="https://medium.com/@cc21/top-10-letters-of-the-alphabet-that-you-should-pay-attention-to-and-why-i-decided-e-is-superior-to-79bccf8b1206">
            Medium article.
          </a>{" "}
          Inspired by viewers like you. <a href="http://ceci.dev/">ceci.dev</a>
        </p>
      </div>
    </div>
  );
};

export const Banner = BannerComponent;
