import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  rootButton: {
    fontSize: '2.4rem',
    border: '0.3rem solid #fff',
    padding: '3px 10px',
    transition: 'all 0.3s ease-in-out 0.1s',
    cursor: 'pointer',
    "&:hover": {
      backgroundColor: "#04C2C9",
      border: '3px solid #04C2C9',
    },
    "&:hover > $icon": {
      transform: 'rotate(180deg) translateY(-2px)',
    },
  },
  icon: {
    transition: 'all 0.3s ease-in-out',
  },
}

class ArrowButton extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.rootButton}>
        <FontAwesomeIcon className={classes.icon} icon="angle-up" />
      </div>
    );
  }
}

export default injectSheet(styles)(ArrowButton);
