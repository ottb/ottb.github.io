import React, { Component } from 'react';

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggled: false};
    this.togglePosition = this.togglePosition.bind(this);
  }

  togglePosition() {
    this.setState({isToggled: !this.state.isToggled});
    this.props.toggleDisplay();
  }
  
  render() {
    var buttonStyle = {
        position: "fixed",
        width: "100%",
        height: "60px",
        backgroundColor: "rgba(0,117,180, 1)",
        padding: "5px",
        bottom: "0px"
    }
    return (
        <div>
            <button style={buttonStyle} onClick={this.togglePosition}>{this.props.text} ({String(this.state.isToggled)})</button>
        </div>
    );
  }
}

export default ToggleButton;