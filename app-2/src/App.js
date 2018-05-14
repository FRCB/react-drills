import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      groceries: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
  render() {
    let list = this.state.groceries.map((item, i) => {
      return (
        <div key={i} >
          <h2>{item}</h2>
        </div>
      )
    })

    return (
      <div className="App">
        {list}
      </div>
    );
  }
}

export default App;
