import React, { Component } from 'react';

class Nested extends Component {
  constructor(props) {
    super(props);
    this.state = {
      derived: ''
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.value === 'bar') {
      console.log('update prevented');
      return false;
    }
    return true;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value === 'foo') {
      console.log('derive state prevented');
      return prevState;
    }
    return {
      derived: nextProps.value.toUpperCase()
    };
  }

  render() {
    console.log('render');
    return (
      <div>
        Value: {this.props.value}<br/>
        Derived: {this.state.derived}
      </div>
    );
  }


  componentDidUpdate() {
    console.log('component did update');
  }
}

export default Nested;