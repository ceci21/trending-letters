import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import './styles.css';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

class PrivacyPolicyModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
  }

  render() {
    const { opened } = this.state;
    const { classes } = this.props;
    return (
      <div className="privacy-policy-modal">
        <Button onClick={() => this.setState({ opened: true })}>Open</Button>
        <Modal open={this.state.opened} onClose={() => console.log('closed')}>
          <div className={`${classes.paper} centered}`}>
            Privacy policy
            <Button onClick={() => this.setState({ opened: false })}>
              Close
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export const PrivacyPolicyModal = withStyles(styles)(PrivacyPolicyModalComponent);
