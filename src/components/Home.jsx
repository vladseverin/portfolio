import React, { Component } from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import ArrowButton from './ArrowButton';
import { Link } from 'react-scroll';

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
    marginBottom: '20px',
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
  textClick: {
    margin: '0 0 10px 0',
  }
};

class Home extends Component {
  constructor(props){
    super(props);
    this.sectionHome = React.createRef();
  }

  componentDidMount() {
    const { getHeightHome } = this.props;
    getHeightHome(this.sectionHome.current.clientHeight);
  }

  render() {
    const { classes } = this.props;
    return (
      <section ref={this.sectionHome} id="home" className={classNames(classes.rootHome, classes.flex)}>
        <div className={classes.text}>
          Hello, I'm <span className={classes.highlight}>Severin Vladislav</span>. <br/>
          I'm frontend developer.
        </div>

        <div className={classes.textClick}>
          Click here!
        </div>
        
        <Link 
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          <ArrowButton />
        </Link >
      </section>
    );
  }
}

export default injectSheet(styles)(Home);
