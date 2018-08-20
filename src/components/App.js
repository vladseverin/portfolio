import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';


import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

library.add(faAngleUp);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeHeight: 0
    }
  }

  getHeightHome = (height) => {
    this.setState({
      homeHeight: height
    });
  }

  render() {
    const { homeHeight } = this.state;
    return (
      <div className="App">
        <Home getHeightHome={this.getHeightHome}/>
        <About homeHeight={homeHeight}/>
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
