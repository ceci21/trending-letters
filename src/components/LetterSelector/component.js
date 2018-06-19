import React from 'react';
import { LetterButton } from '../LetterButton';

import './styles.css';

import { LETTERS } from './constants';

class LetterSelectorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.lastSelectedLetters = this.props.selectedLetters;
  }

  getLetterButtons = () => {
    const { selectedLetters } = this.props;
    return LETTERS.map((letter, i) => {
      const selected = selectedLetters.includes(letter);
      return (
        <LetterButton 
          key={i} 
          letter={letter} 
          disabled={selected} 
          onSelectHandler={this.props.onSelectHandler} />
      );
    });
  }

  render() {
    return (
      <div className="letter-selector">
        { this.getLetterButtons() }
      </div>
    );
  }
}

export const LetterSelector = LetterSelectorComponent;
