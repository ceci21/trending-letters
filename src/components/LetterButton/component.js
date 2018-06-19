import React from 'react';
import Button from '@material-ui/core/Button';

import './styles.css';

//#2182F8

const styles = {
  deselected: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    width: '100%',
    textTransform: 'capitalize'
  }, 
  selected: {
    border: 0,
    width: '100%',
    textTransform: 'capitalize',
    boxShadow: '0'
  }
};


const LetterButtonComponent = props => {
  let { letter, selected, onSelectHandler } = props;

  return (
    <div className="letter-button">
      <Button 
        size="small" 
        variant="contained" 
        color="default"
        style={{
          ...((selected) ? styles.selected : styles.deselected)
        }}
        onClick={() => onSelectHandler(letter)}
        >
        { letter }
      </Button>
    </div>
  );
};

export const LetterButton = LetterButtonComponent;
