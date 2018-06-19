import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import './styles.css';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    color: '#2196f3'
  },
});


const LoadingSpinnerComponent = props => {
  const { disabled, classes } = props;
  if (!disabled) {
    return (
      <div className="loading-spinner pumped-up">
        <CircularProgress className={classes.progress} size={50} />
      </div>
    );
  }
  return <div className="loading-spinner"/>;
};

export const LoadingSpinner = withStyles(styles)(LoadingSpinnerComponent);
