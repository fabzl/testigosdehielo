import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import Footer from './Footer';

import EyeMenu from '../../img/menu_eye.svg';

class Fotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      rootURL: '/fotos',
      menuVisible: false,
      endNavVisible: true,
    };
  }

  render() {
    return (
      <div className="wrapperSection wrapper-2">
        Fotos
      </div>
    );
  }
}

export default Fotos;