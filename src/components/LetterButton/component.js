import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './styles.css';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
};

const LetterButtonComponent = props => {
  let { classes, letter, disabled, onSelectHandler } = props;
  if (disabled) {
    classes = {};
  }

  return (
    <Button 
      className="letter-button" 
      size="small" 
      variant="contained" 
      color="default"
      classes={classes}
      onClick={() => onSelectHandler(letter)}
      >
      { letter }
    </Button>
  );
};

export const LetterButton = withStyles(styles)(LetterButtonComponent);
