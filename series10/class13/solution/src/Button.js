import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.increment}>
        +1
      </button>
    );
  }
}

export default Button;
