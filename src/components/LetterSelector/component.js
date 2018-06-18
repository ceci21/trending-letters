import React from 'react';
import { LetterButton } from '../LetterButton';

import './styles.css';

import { LETTERS } from './constants';

class LetterSelectorComponent extends React.Component {
  render() {
    return (
      <div className="letter-selector">
        Letter Selector Component
        <LetterButton letter={'a'} />
      </div>
    );
  }
}

export const LetterSelector = LetterSelectorComponent;
