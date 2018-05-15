import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      userInput: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value })
  }

  handleClick() {
    this.setState({
      list: [...this.state.list, this.state.userInput],
      userInput: ''
    });
  }

  render() {

    let list = this.state.list.map((element, i) => {
      return (
        <Todo key={i} task={element} />
      )
    })


    return (
      <div className="App">
        <h1>My to-do-list</h1>
        <input
          onChange={this.handleChange}
          value={this.state.userInput}
          placeholder="Enter new task"
          type="text" />
        <button
          onClick={this.handleClick}
        >
          Add
        </button>
        {list}
      </div>
    );
  }
}

export default App;
