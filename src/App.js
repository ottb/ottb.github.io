import React, { Component } from 'react';
import HTML5Video from './HTML5Video.js';
import KalturaVideo from './KalturaVideo.js';
import './styles.css';

class App extends Component {
  render() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var isMobile = ('ontouchstart' in document.documentElement && /Mobi/.test(userAgent));
    if (isMobile) {
      return (
        <KalturaVideo />
      );
    } else {
      return (
        <HTML5Video />
      );
    }
  }
}

export default App;
