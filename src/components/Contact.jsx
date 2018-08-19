import React, { Component } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const style = {
  rootContact: {
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

class Contact extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classNames(classes.rootContact, classes.flex)}>
        <h2 className={classes.title}>CONTACT</h2>
      </div>
    );
  }
}

export default injectSheet(style)(Contact);
