import React, { Component } from 'react';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        {this.state.count}
        <Button increment={this.increment} />
      </div>
    );
  }
}

export default App;
