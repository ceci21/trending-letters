import React from 'react';

const LoadingSpinnerComponent = (props) => {
  const { disabled } = props;
  if (!disabled) {
    return (
      <div className="loading-spinner">Loading...</div>
    )
  }
  return (
    <div className="loading-spinner">Not loading</div>
  );
}

export const LoadingSpinner = LoadingSpinnerComponent;