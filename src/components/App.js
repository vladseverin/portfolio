import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

library.add(faAngleUp);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />

        <Element name="about">
          <About />
        </Element>

        <Projects />

        <Contact />

        <Footer />
      </div>
    );
  }
}

export default App;
