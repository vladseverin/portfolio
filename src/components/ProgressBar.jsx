import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  wrapBar: {
    width: '100%',
    backgroundColor: '#EEEEEE',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    marginBottom: '15px',
  },
  progressBar: {
    width: '100%',
    backgroundColor: '#EEEEEE',
    overflow: 'hidden',
  },
  tool: {
    padding: '6px 10px',
    backgroundColor: '#05C2C9',
    color: '#fff',
    fontWeight: 'bold', 
    minWidth: '110px',
    textAlign: 'center',
  },
  fill: {
    width: '0%',
    height: '28px',
    backgroundColor: '#01A1A7',
  },
  percent: {
    padding: '6px 10px',
    marginLeft: 'auto',
    textAlign: 'center',
  },
}

class ProgressBar extends Component {
  render() {
    const { classes, tool, occupied = 0 } = this.props;
    return (
      <div className={classes.wrapBar}>
        <div className={classes.tool}>{tool}</div>
        <div className={classes.progressBar} >
          <div className={classes.fill} style={{width: `${occupied}%`}}></div>
        </div>
        <div className={classes.percent}>{`${occupied}%`}</div>
      </div>
    );
  }
}

export default injectSheet(styles)(ProgressBar);
