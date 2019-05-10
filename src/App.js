import React, { Component } from 'react';
import Nested from './Nested';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <div className="App">
        <h1>React Prevent Update</h1>
        <input onChange={(e) => this.setState({ value: e.target.value })}/>
        <Nested value={this.state.value}/>
      </div>
    );
  }
}

export default App;
