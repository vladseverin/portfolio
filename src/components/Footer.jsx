import React, { Component } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const style = {
  rootFooter: {
    height: '30vh',
    backgroundColor: '#141c28',
    color: '#fff',
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

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classNames(classes.rootFooter, classes.flex)}>
        <h2 className={classes.title}>FOOTER</h2>
      </div>
    );
  }
}

export default injectSheet(style)(Footer);
