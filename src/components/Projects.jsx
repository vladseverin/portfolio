import React, { Component } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';

const style = {
  rootProjects: {
    height: '100vh',
    backgroundColor: '#F5F5F5',
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

class Projects extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classNames(classes.rootProjects, classes.flex)}>
        <h2 className={classes.title}>PROJECTS</h2>
      </div>
    );
  }
}

export default injectSheet(style)(Projects);
