import React, { Component } from 'react';
import HTML5Video from './HTML5Video.js';
import KalturaVideo from './KalturaVideo.js';
import ToggleButton from './ToggleButton.js';
import PageContent from './PageContent.js';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showContent: false};
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    this.setState({
      showContent: !this.state.showContent
    });
  }

  render() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var isMobile = ('ontouchstart' in document.documentElement && /Mobi/.test(userAgent));
    return(
      <div>
        {!this.state.showContent && (isMobile ? <KalturaVideo /> : <HTML5Video />)}
        <ToggleButton text = "2016 Annual Report" toggleDisplay={this.toggleDisplay.bind(this)} />
        {this.state.showContent && <PageContent />}
      </div>
    );
  }
}

export default App;
