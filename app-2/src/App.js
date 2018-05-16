import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      groceries: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  render() {
    let list = this.state.groceries.map((element, i) => {
      return (
        <h2 key={i}>
          {element}
        </h2>
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
