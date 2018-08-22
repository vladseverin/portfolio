import React, { Component } from 'react';
import injectSheet from 'react-jss';
import ProgressBar from './ProgressBar';
import { infoProgress } from '../data';

const styles = {
  sectionProgress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexFlow: 'column',
  },
}

class ProgressBarList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.sectionProgress}>
        {infoProgress.map((item, id) => (
          <ProgressBar
            key={id}
            tool={item.tool}
            occupied={item.percent}
          />
        ))}
      </div>
    );
  }
}

export default injectSheet(styles)(ProgressBarList);
