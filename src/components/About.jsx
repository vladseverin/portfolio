import React, { Component } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { Element } from 'react-scroll';
import ProgressBarList from './ProgressBarList';

import AboutMark from './AboutMark';

const styles = {
  flex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 10px',
    width: '100%',
    boxSizing: 'border-box',
  },
  rootAbout: {
    padding: '80px 0 100px 0',
  },
  title: {
    fontSize: '30pt',
    color: '#444649',
    opacity: 0,
  },
  underLine: {
    margin: '15px 0 75px 0',
    width: '70px',
    height: '4px',
    background: ' #444649',
    opacity: 0,
  },
  show: {
    animation: 'slideInLeft 0.75s ease both',
    transition: 'all 0.3s ease-in',
  },
  '@keyframes slideInLeft': {
    'from': {
      transform: 'translateX(-300px) scale(0.9)',
      opacity: 0,
    },
    'to': {
      transform: 'translateX(0) scale(1)',
      opacity: 1,
    }
  },
}

class About extends Component {
  state = {
    visibleTitle: false,
    visibleUnderLine: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { homeHeight } = this.props;
    const { visibleTitle, visibleUnderLine } = this.state;

    //declaration of showing title
    if (window.pageYOffset > (homeHeight / 2) && !visibleTitle) {
      console.log(homeHeight);
      this.setState({ visibleTitle: true});
    }

    //declaration of showing underline
    if (window.pageYOffset > (homeHeight / 2 + 20) && !visibleUnderLine) {
      console.log(homeHeight);
      setTimeout(() => {
        this.setState({ visibleUnderLine: true });
      }, 200);
    }
  }

  render() {
    const { classes } = this.props;
    const { visibleTitle, visibleUnderLine } = this.state;

    return (
      <Element name="about">
        <section className={classes.rootAbout} >
          <div className={classNames(classes.container, classes.flex)} >
            <h2 
              className={classNames(classes.title, visibleTitle ? classes.show : null)}>
              ABOUT
            </h2>
            <div className={classNames(classes.underLine, visibleUnderLine ? classes.show : null)}></div>

            <AboutMark />

            <ProgressBarList />
          </div>
        </section>
      </Element>
    );
  }
}

export default injectSheet(styles)(About);
