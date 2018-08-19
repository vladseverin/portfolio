import React, { Component } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import ArrowButton from './ArrowButton';

const styles = {
  rootHome: {
    backgroundColor: '#141c28',
    color: '#fff',
    height: '100vh',
    '&:nth-of-type(1) $highlight': {
      fontWeight: 'bold',
    }
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: '32pt',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  highlight: {
    color: '#04C2C9',
    animation: 'change-color 3s ease-in-out infinite',
  },
  '@keyframes change-color': {
    '0%': { color: '#E31B6D' },
    '33%': { color: '#04C2C9' },
    '70%': { color: '#04c988' },
    '100%': { color: '#E31B6D' },
  },
};

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <section className={classNames(classes.rootHome, classes.flex)}>
        <div className={classes.text}>
          Hello, I'm <span className={classes.highlight}>Severin Vladislav</span>. <br/>
          I'm frontend developer.
        </div>
        <ArrowButton />
      </section>
    );
  }
}

export default injectSheet(styles)(Home);
