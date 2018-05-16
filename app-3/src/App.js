import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      groceries: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ input: e.target.value })
  }

  render() {
    let list = this.state.groceries.filter(word => {
      return word.includes(this.state.input)
    }).map((element, i) => {
      return (
        <h2 key={i}>
          {element}
        </h2>
      )
    })


    return (
      <div className="App">
        <input
          type="text"
          placeholder="Enter your text here"
          onChange={this.handleChange} />
        <p>
          {list}
        </p>
      </div>

    );
  }
}

export default App;
