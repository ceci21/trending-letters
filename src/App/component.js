import React from 'react';
import { Banner } from '../components/Banner';
import { LetterSelector } from '../components/LetterSelector';
import { PrivacyPolicyModal } from '../components/PrivacyPolicyModal';
import { TrendViewer } from '../components/TrendViewer';
import { WarningMessage } from '../components/WarningMessage';
import { removeLetter } from '../lib';

import './styles.css';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLetters: ['L'],
      limit: 5,
      maximumLettersReached: false,
      minimumLettersReached: false
    };
    this.lastSelectedLetters = this.state.selectedLetters.slice();
  }

  onSelectHandler = letter => {
    let selectedLetters = this.state.selectedLetters.slice();
    let isAlreadySelected = selectedLetters.includes(letter);

    if (
      !isAlreadySelected &&
      selectedLetters.length < 5 &&
      selectedLetters.length >= 1
    ) {
      selectedLetters.push(letter);
      this.setState({
        selectedLetters,
        maximumLettersReached: false,
        minimumLettersReached: false
      });
    } else if (isAlreadySelected && selectedLetters.length > 1) {
      selectedLetters = removeLetter(letter, selectedLetters);
      this.setState({
        selectedLetters,
        maximumLettersReached: false,
        minimumLettersReached: false
      });
    } else if (isAlreadySelected && selectedLetters.length === 1) {
      this.setState({ minimumLettersReached: true });
    } else {
      this.setState({ maximumLettersReached: true });
    }
  };

  render() {
    const selectedLetters = this.state.selectedLetters;
    const { maximumLettersReached, minimumLettersReached } = this.state;

    return (
      <div className="app-container">
        <Banner />
        <div className="app">
          <div className="sec-1">
            <LetterSelector
              selectedLetters={selectedLetters}
              onSelectHandler={this.onSelectHandler}
            />
          </div>
          <div className="sec-2">
            <WarningMessage
              maxReached={maximumLettersReached}
              minReached={minimumLettersReached}
            />
          </div>
          <div className="sec-3">
            <TrendViewer selectedLetters={selectedLetters} />
          </div>
        </div>
        <div className="footer"/>
      </div>
    );
  }
}

export const App = AppComponent;
