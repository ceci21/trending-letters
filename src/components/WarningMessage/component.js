import React from 'react';

import './styles.css';

const WarningMessageComponent = props => {
  const { enabled } = props;
  if (enabled) {

    return (
      <div className="message">You can only select up to 5 letters.</div>
    )
  }
  return null;
};

export const WarningMessage = WarningMessageComponent;
