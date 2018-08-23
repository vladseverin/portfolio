import React, { Component } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import Icon from './Icon';

const styles = {
  mark: {
    color: '#fff',
    margin: '33px 10px;',
    opacity: 0,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto 80px auto',
    padding: '0 10px',
    width: '100%',
    boxSizing: 'border-box',
  },
  combMark: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    width: '100%',
    margin: '0 auto',
  },
  markWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column',
    padding: '0 10px',
    flex: '1 0 50%',
  },
  represent: {
    textAlign: 'center',
    color: '#626262',
    lineHeight: '18pt',
    opacity: 0,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '18pt',
    marginBottom: '5px',
  },
  description: {
    fontSize: '12pt',
    maxWidth: '260px',
  },
  show: {
    animation: 'flipInX 1s ease both',
  },
  '@media screen and (max-width: 960px)': {
    flex: {
      flexWrap: 'wrap',
    },
    combMark: {
      alignItems: 'flex-start',
    }
  },
  '@keyframes flipInX': {
    'from': {
      '-webkit-transform': 'perspective(400px) rotateY(90deg)',
      'transform': 'perspective(400px) rotateY(90deg)',
      '-webkit-animation-timing-function': 'ease-in',
      'animation-timing-function': 'ease-in',
      opacity: 0,
    },
    '40%': {
      '-webkit-transform': 'perspective(400px) rotateY(-20deg)',
      transform: 'perspective(400px) rotateY(-20deg)',
      '-webkit-animation-timing-function': 'ease-in',
      'animation-timing-function': ' ease-in',
    },
    '60%': {
      '-webkit-transform': 'perspective(400px) rotateY(10deg)',
      transform: 'perspective(400px) rotateY(10deg)',
      opacity: 1,
    },
    '80%': {
      '-webkit-transform': 'perspective(400px) rotateY(-5deg)',
      transform: 'perspective(400px) rotateY(5deg)',
    },
    'to': {
      '-webkit-transform': 'perspective(400px)',
      transform: 'perspective(400px)',
      opacity: 1,
    },
  },
}

class AboutMark extends Component {
  render() {
    const { classes, visible } = this.props;
    const isVisible = visible ? classes.show : null;
    return (
      <div className={classNames(classes.flex, classes.container)}>
        <div className={classes.combMark}>
          <div className={classes.markWrap}>
            <div className={classNames(classes.mark, isVisible)}>
              <Icon name='mobile-alt' size='3x' />
            </div>
            <div className={classNames(classes.represent, isVisible)}>
              <div className={classes.title}>
                Responsive
              </div>
              <div className={classes.description}>
                My layouts will work on any device, big or small.
              </div>
            </div>
          </div>

          <div className={classes.markWrap}>
            <div className={classNames(classes.mark, isVisible)}>
              <Icon name='rocket' size='3x' />
            </div>
            <div className={classNames(classes.represent, isVisible)}>
              <div className={classes.title}>
                Dynamic
              </div>
              <div className={classes.description}>
                Websites don't have to be static, I love making pages come to life.
              </div>
            </div>
          </div>
        </div>

        <div className={classes.combMark}>
          <div className={classes.markWrap}>
            <div className={classNames(classes.mark, isVisible)}>
              <Icon name='lightbulb' size='3x' />
            </div>
            <div className={classNames(classes.represent, isVisible)}>
              <div className={classes.title}>
                Intuitive
              </div>
              <div className={classes.description}>
                Strong preference for easy to use, intuitive UX/UI.
              </div>
            </div>
          </div>

          <div className={classes.markWrap}>
            <div className={classNames(classes.mark, isVisible)}>
              <Icon name={['fab', 'cloudscale']} size='3x' />
            </div>
            <div className={classNames(classes.represent, isVisible)}>
              <div className={classes.title}>
                Fast
              </div>
              <div className={classes.description}>
                Fast load times and lag free interaction, my highest priority
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(AboutMark);
