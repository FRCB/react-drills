import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <input
          onChange={this.handleChange}
        />
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
