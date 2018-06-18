import React from 'react';

import './styles.css';

const LetterButtonComponent = (props) => {
  const { letter } = props;
  return <div className="letter-button">{ letter }</div>
}

export const LetterButton = LetterButtonComponent;