import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      groceries: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      userInput: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value })
  }

  render() {
    let groceriesOnScreen = this.state.groceries.filter((item, i) => {
      return item.includes(this.state.userInput);
    }).map((item, i) => {
      return <h2 key={i}> {item} </h2>
    })

    return (
      <div className="App">
        <input
          onChange={this.handleChange}
        />
        {groceriesOnScreen}
      </div>
    );
  }
}

export default App;
