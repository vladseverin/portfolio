import React, { Component } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const style = {
  rootAbout: {
    height: '100vh',
  },
  title: {
    fontSize: '2.4rem',
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classNames(classes.rootAbout, classes.flex)}>
        <h2 className={classes.title}>ABOUT</h2>
      </div>
    );
  }
}

export default injectSheet(style)(About);
