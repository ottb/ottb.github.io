import React, { Component } from 'react';

class PageContent extends Component {
  render() {
    var textStyle = {
      color: "#0075b4"
    }
    return (
        <div style={textStyle}>
            This is stuff on a page that wasn't there before.
        </div>
    );
  }
}

export default PageContent;