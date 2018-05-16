import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ input: e.target.value })
  }


  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Enter your text here"
          onChange={this.handleChange} />
        <h1>{this.state.input}</h1>
      </div>
    );
  }
}

export default App;
