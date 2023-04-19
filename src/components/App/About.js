import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import Footer from './Footer';

import EyeMenu from '../../img/menu_eye.svg';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      rootURL: '/About',
      menuVisible: false,
      endNavVisible: true,
    };
  }

  render() {
    return (
      <div className="wrapperSection wrapper-2">
        ABOUT
      </div>
    );
  }
}

export default About;