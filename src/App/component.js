import React from 'react';
import { LetterSelector } from '../components/LetterSelector';
import { HtmlEmbed } from '../components/HtmlEmbed';
import { TrendViewer } from '../components/TrendViewer';

import './styles.css';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="app">
        <LetterSelector />
        <TrendViewer />
        <HtmlEmbed />
      </div>
    );
  }
}

export const App = AppComponent;
