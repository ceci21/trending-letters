import React from 'react';

import './styles.css';


const BannerComponent = () => {
  return (
    <div className="banner">
      <div className="title">Letter Trends Helper Tool 🤔</div>
      <div className="web-info">
        <p>
          Inspired by viewers like you. <a href="http://ceci.io/">ceci.io</a>
        </p>
      </div>
    </div>
  );
};

export const Banner = BannerComponent;
