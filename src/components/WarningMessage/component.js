import React from 'react';
import Icon from '@material-ui/core/Icon';

import './styles.css';

const WarningMessageComponent = props => {
  const { maxReached, minReached } = props;
  let message = '';
  let fade = 'fade-out';
  if (maxReached) {
    message =
      'You can only select up to 5 letters. Please deselect one before selecting another.';
  } else if (minReached) {
    message = 'You must have at least one letter selected.';
  }
  if (message !== '') {
    fade = 'fade-in';
  }
  return (
    <div className={`warning-message ${fade}`}>
      <div className="warning-container">
        <span className="warning-icon">{message !== '' ? <Icon>warning</Icon> : null}</span>
        <span className="warning-text">
        {message}
        </span>
      </div>
    </div>
  );
};

export const WarningMessage = WarningMessageComponent;
