import React, { Component } from 'react';
import HTML5Video from './HTML5Video';
import KalturaVideo from './KalturaVideo';
import ToggleButton from './ToggleButton';
import PageContent from './PageContent';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showContent: false};
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  // this probably isn't the best place for this; likely need something between app and components
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
        <ToggleButton text="2016 Annual Report" toggleDisplay={this.toggleDisplay.bind(this)} />
        {this.state.showContent && <PageContent />}
      </div>
    );
  }
}

export default App;
