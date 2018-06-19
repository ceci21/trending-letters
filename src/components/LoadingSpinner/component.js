import React from 'react';

const LoadingSpinnerComponent = (props) => {
  const { enabled } = props;
  if (enabled) {
    return (
      <div className="loading-spinner">Loading...</div>
    )
  }
  return (
    <div className="loading-spinner">Not loading</div>
  );
}

export const LoadingSpinner = LoadingSpinnerComponent;