import React, { Component } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { Element } from 'react-scroll';

const style = {
  rootAbout: {
    height: '100vh',
    padding: '80px 0 100px 0',
  },
  title: {
    fontSize: '30pt',
    color: '#444649',
  },
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
  underLine: {
    margin: '15px 0 75px 0',
    width: '70px',
    height: '4px',
    background:' #444649',
  },
}

class About extends Component {
  state = {
    visible: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { homeHeight } = this.props;
    const { visible } = this.state;


    if (window.pageYOffset > (homeHeight / 2) && !visible) {
      console.log(homeHeight);
      this.setState({visible: true});
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Element name="about">
        <section className={classes.rootAbout} >

          <div className={classNames(classes.container, classes.flex)} >
            <h2 
              className={classes.title}>
              ABOUT
            </h2>
            <div className={classes.underLine}></div>
          </div>

        </section>
      </Element>
    );
  }
}

export default injectSheet(style)(About);
