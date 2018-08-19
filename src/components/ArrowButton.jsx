import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  rootButton: {
    fontSize:' 2.4rem',
    border: '0.3rem solid #fff',
    padding:' 0 1rem',
    transition: 'all 0.3s ease-in-out 0.1s',
    cursor: 'pointer',
    "&:hover": {
      backgroundColor: "#04C2C9",
      border: '0.3rem solid #04C2C9',
    },
    "&:hover > $icon": {
      transform: 'rotate(180deg) translateY(-2px)',
    },
  },
  icon: {
    transition: 'all 0.3s ease-in-out',
  },
  text: {
    margin: '0 0 1rem 0',
  }
}

class ArrowButton extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.text}>
          Click here!
        </div>
        <div className={classes.rootButton}>
          <FontAwesomeIcon className={classes.icon} icon="angle-up" />
        </div>
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(ArrowButton);
