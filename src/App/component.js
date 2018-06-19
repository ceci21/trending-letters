import React from 'react';
import { LetterSelector } from '../components/LetterSelector';
import { HtmlEmbed } from '../components/HtmlEmbed';
import { TrendViewer } from '../components/TrendViewer';
import { WarningMessage } from '../components/WarningMessage';
import { removeLetter } from '../lib';

import './styles.css';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLetters: [],
      limit: 5,
      warningMessageEnabled: false
    };
    this.lastSelectedLetters = this.state.selectedLetters.slice();
  }

  onSelectHandler = (letter) => {
    let selectedLetters = this.state.selectedLetters.slice();
    let isAlreadySelected = selectedLetters.includes(letter);

    if (!isAlreadySelected && selectedLetters.length < 5 && selectedLetters.length >= 0) {
      selectedLetters.push(letter);
      this.setState({ selectedLetters, warningMessageEnabled: false });
    } else if (isAlreadySelected) {
      selectedLetters = removeLetter(letter, selectedLetters);
      this.setState({ selectedLetters, warningMessageEnabled: false });
    } else {
      this.setState({ warningMessageEnabled: true })
    }
  }

  render() {
    const selectedLetters = this.state.selectedLetters;
    const { warningMessageEnabled } = this.state;

    return (
      <div className="app">
        <LetterSelector 
          selectedLetters={selectedLetters} 
          onSelectHandler={this.onSelectHandler} />
        <WarningMessage enabled={warningMessageEnabled} />
        <TrendViewer 
          selectedLetters={selectedLetters} />
        <HtmlEmbed />
      </div>
    );
  }
}

export const App = AppComponent;
