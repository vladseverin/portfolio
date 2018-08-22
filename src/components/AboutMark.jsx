import React, { Component } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from './Icon';

const styles = {
  mark: {
    color: '#fff',
    margin: '33px 10px;',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 10px',
    width: '100%',
    boxSizing: 'border-box',
  },
  combMark: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  markWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column',
    padding: '0 10px',
  },
  represent: {
    textAlign: 'center',
  },
  '@media screen and (max-width: 960px)': {
    flex: {
      flexWrap: 'wrap',
    },
    combMark: {
      alignItems: 'flex-start',
    }
  },
}

class AboutMark extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classNames(classes.flex, classes.container)}>
        <div className={classes.combMark}>
          <div className={classes.markWrap}>
            <div className={classes.mark}>
              <Icon name='mobile-alt' size='3x' />
            </div>
            <div className={classes.represent}>
              <div>
                Responsive
              </div>
              <div>
                My layouts will work on any device, big or small.
              </div>
            </div>
          </div>

          <div className={classes.markWrap}>
            <div className={classes.mark}>
              <Icon name='rocket' size='3x' />
            </div>
            <div className={classes.represent}>
              <div>
                Dynamic
              </div>
              <div>
                Websites don't have to be static, I love making pages come to life.
              </div>
            </div>
          </div>
        </div>

        <div className={classes.combMark}>
          <div className={classes.markWrap}>
            <div className={classes.mark}>
              <Icon name='lightbulb' size='3x' />
            </div>
            <div className={classes.represent}>
              <div>
                Intuitive
              </div>
              <div>
                Strong preference for easy to use, intuitive UX/UI.
              </div>
            </div>
          </div>

          <div className={classes.markWrap}>
            <div className={classes.mark}>
              <Icon name={['fab', 'cloudscale']} size='3x' />
            </div>
            <div className={classes.represent}>
              <div>
                Fast
              </div>
              <div>
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
