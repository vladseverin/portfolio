import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const style = {
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(-90deg)',
  },
  hexagon: {
    width: '100px',
    height: '68px',
    background: '#04C2C9',
    position: 'relative',
    transform: 'rotate(90deg)',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-25px',
      left: 0,
      width: 0,
      height: 0,
      borderLeft: '50px solid transparent',
      borderRight: '50px solid transparent',
      borderTop: '25px solid #04C2C9',
      transform: 'translateX(0.1px)',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-25px',
      left: '0',
      width: '0',
      height: '0',
      borderLeft: '50px solid transparent',
      borderRight: '50px solid transparent',
      borderBottom: '25px solid #04C2C9',
      transform: 'translateX(-0.1px)',
    },
  },
}

class Icon extends Component {
  render() {
    const { classes, name, size } = this.props;
    return (
      <div className={classes.hexagon}>
        <div className={classes.icon}>
          <FontAwesomeIcon 
            icon={name}
            size={size} />
        </div>
      </div>
    );
  }
}

export default injectSheet(style)(Icon);
