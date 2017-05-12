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
    return (
        <div>
            <button onClick={this.togglePosition}>{this.props.text} ({String(this.state.isToggled)})</button>
        </div>
    );
  }
}

export default ToggleButton;